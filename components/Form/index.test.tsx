import React, { useState } from 'react';

import { screen, fireEvent, waitFor } from '@testing-library/react';

import { storeBasedRender } from '../../helpers/tests/testUtils';
import fulfilledStore from '../../__mocks__/store/fulfilled.json';

import { Form } from '.';

describe('render', () => {
  it('renders component', () => {
    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    expect(screen.getByText('first idea:')).toBeInTheDocument();
  });
});

describe('going to the next step', () => {
  it('goes to the next step if current input is filled with text', async () => {
    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    const input = screen.getByTestId('idea1');
    const nextButton = screen.getByTestId('next');

    fireEvent.change(input, { target: { value: 'test idea' } });
    fireEvent.click(nextButton);

    const desirableText = await waitFor(() => screen.getByText('nice! second idea:'));
    expect(desirableText).toBeInTheDocument();
  });

  it('goes to the next step when clicks enter and input is filled', async () => {
    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    const input = screen.getByTestId('idea1');

    fireEvent.change(input, { target: { value: 'test idea' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const desirableText = await waitFor(() => screen.getByText('nice! second idea:'));
    expect(desirableText).toBeInTheDocument();
  });

  it('can not go to the next step if this is the 10th one', async () => {
    jest.spyOn(React, 'useState').mockImplementationOnce(() => useState<unknown>(10));

    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    expect(screen.queryByTestId('next')).toBeNull();
  });

  it('can not go to the next step input is not filled', async () => {
    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    const nextButton = screen.getByTestId('next');

    fireEvent.click(nextButton);

    const desirableText = await waitFor(() =>
      screen.getByText('you need to write down this idea 🚀'),
    );
    expect(desirableText).toBeInTheDocument();
  });
});

describe('going to the previous step', () => {
  it('goes to the previous step if current is not the first one and can not go to the previous once more (since is on the first one)', async () => {
    const spy = jest.spyOn(React, 'useState');
    spy.mockImplementationOnce(() => useState<unknown>(2));

    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    const prevButton = screen.getByTestId('prev');

    fireEvent.click(prevButton);

    const desirableText = await waitFor(() => screen.getByText('first idea:'));
    expect(desirableText).toBeInTheDocument();
    expect(screen.queryByTestId('prev')).toBeNull();
  });
});

describe('finishing', () => {
  it('can click the "finished!" button when its on the last step', async () => {
    const spy = jest.spyOn(React, 'useState');
    spy.mockImplementationOnce(() => useState<unknown>(10));

    storeBasedRender(<Form />, { preloadedState: fulfilledStore });

    const desirableText = await waitFor(() => screen.getByText('finished!'));
    expect(desirableText).toBeInTheDocument();
  });
});
