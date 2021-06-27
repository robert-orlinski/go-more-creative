import React from 'react';

import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { EntriesList } from '.';
import { storeBasedRender } from '../../helpers/tests/testUtils';

import fulfilledStore from '../../__mocks__/store/fulfilled.json';
import pendingStore from '../../__mocks__/store/pending.json';

describe('results render', () => {
  it('renders status message when there is any', () => {
    storeBasedRender(<EntriesList />, { preloadedState: pendingStore });

    expect(screen.getByText('loading...')).toBeInTheDocument();
  });

  it('renders the list when there is no status message and list is not empty', () => {
    storeBasedRender(<EntriesList />, { preloadedState: fulfilledStore });

    expect(screen.getByText('topic 3')).toBeInTheDocument();
  });

  it('renders "practice 🔥" link when there is no entries but server works', () => {
    storeBasedRender(<EntriesList />, {
      preloadedState: {
        ...fulfilledStore,
        entries: { list: [], statusMessage: '' },
      },
    });

    expect(screen.getByText('i will do it!')).toBeInTheDocument();
  });
});

describe('user interactions with the list', () => {
  it('opens the first entry details on first entry title click', async () => {
    storeBasedRender(<EntriesList />, { preloadedState: fulfilledStore });

    const firstEntryContainer = screen.getByTestId('entry-container-1');
    const firstEntryHeader = screen.getByTestId('entry-header-1');

    userEvent.click(firstEntryHeader);

    expect(firstEntryContainer).toHaveAttribute('open');
  });

  it('deletes first entry on delete button click', async () => {
    const { queryByText } = storeBasedRender(<EntriesList />, {
      preloadedState: fulfilledStore,
    });

    const deleteButton = screen.getByTestId('delete-entry-button-3');
    userEvent.click(deleteButton);

    await waitForElementToBeRemoved(queryByText('topic 3'));
  });
});
