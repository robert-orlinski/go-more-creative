import React, { useState } from 'react';
import { render, fireEvent, waitFor, queryByTestId } from '@testing-library/react';

import { Provider } from 'react-redux';

import store from '../../store';
import { Form } from '.';

describe('render', () => {
  it('renders component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    expect(getByText('first idea:')).toBeInTheDocument();
  });
});

describe('switching steps', () => {
  it('goes to the next step if current input is filled with text', async () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const input = getByTestId('idea1');
    const nextButton = getByTestId('next');

    fireEvent.change(input, { target: { value: 'test idea' } });
    fireEvent.click(nextButton);

    const desirableText = await waitFor(() => getByText('nice! second idea:'));

    expect(desirableText).toBeInTheDocument();
  });

  it('can not go to the next step if this is the 10th one', async () => {
    jest.spyOn(React, 'useState').mockImplementationOnce(() => useState<unknown>(10));

    const { queryByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    expect(queryByTestId('next')).toBeNull();
  });
});
