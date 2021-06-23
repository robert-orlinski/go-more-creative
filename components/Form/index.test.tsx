import React, { useState } from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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

describe('going to the next step', () => {
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

  it('goes to the next step when clicks enter and input is filled', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const input = getByTestId('idea1');

    fireEvent.change(input, { target: { value: 'test idea' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

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

  it('can not go to the next step input is not filled', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const nextButton = getByTestId('next');

    fireEvent.click(nextButton);

    const desirableText = await waitFor(() => getByText('you need to write down this idea 🚀'));
    expect(desirableText).toBeInTheDocument();
  });
});

describe('going to the previous step', () => {
  it('goes to the previous step if current is not the first one and can not go to the previous once more (since is on the first one)', async () => {
    jest.spyOn(React, 'useState').mockImplementationOnce(() => useState<unknown>(2));

    const { getByTestId, getByText, queryByTestId } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const prevButton = getByTestId('prev');

    fireEvent.click(prevButton);

    const desirableText = await waitFor(() => getByText('first idea:'));
    expect(desirableText).toBeInTheDocument();

    expect(queryByTestId('prev')).toBeNull();
  });
});

describe('finishing', () => {
  it('can click the "finished!" button when its on the last step', async () => {
    jest.spyOn(React, 'useState').mockImplementationOnce(() => useState<unknown>(10));

    const { getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>,
    );

    const desirableText = await waitFor(() => getByText('finished!'));
    expect(desirableText).toBeInTheDocument();
  });
});
