import fetch from 'jest-fetch-mock';

import mockedEntriesArray from '../../__mocks__/entries/multiple.json';
import mockedEntry from '../../__mocks__/entries/single.json';

import { initialState, add, remove, fetchEntries, statusMessages } from '.';

import { reducer } from '../';

import { FetchedEntryType } from '../../types/global';
import { configureStore } from '@reduxjs/toolkit';

let testedStore: any;

beforeEach(() => {
  testedStore = configureStore({ reducer });
});

describe('initial state', () => {
  it('have initial state on first render', () => {
    const entriesSliceData = testedStore.getState().entries;

    expect(entriesSliceData).toEqual(initialState);
  });
});

describe('thunks', () => {
  it('adds entries to the store on successful thunk resolve and displays proper message', async () => {
    fetch.mockResponse(JSON.stringify(mockedEntriesArray));

    await testedStore.dispatch(fetchEntries());

    const entriesSliceData = testedStore.getState().entries;

    expect(entriesSliceData).toEqual({
      list: mockedEntriesArray,
      statusMessage: statusMessages.fulfilled,
    });
  });
});

describe('extra reducers', () => {
  it('returns initial state with pending message when pending extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.pending.type });

    const entriesSliceData = testedStore.getState().entries;

    expect(entriesSliceData).toEqual(initialState);
  });

  it('returns initial state with fullfiled message when fullfiled extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.fulfilled.type, payload: mockedEntriesArray });

    const entriesSliceData = testedStore.getState().entries;

    expect(entriesSliceData).toEqual({
      list: mockedEntriesArray,
      statusMessage: statusMessages.fulfilled,
    });
  });

  it('returns initial state with rejected message when rejected extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.rejected.type });

    const entriesSliceData = testedStore.getState().entries;

    expect(entriesSliceData).toEqual({
      ...initialState,
      statusMessage: statusMessages.rejected,
    });
  });
});

describe('actions', () => {
  it('adds entry on "add" action', () => {
    testedStore.dispatch(add(mockedEntry as FetchedEntryType));

    const entriesSliceData = testedStore.getState().entries;
    expect(entriesSliceData).toEqual({
      ...entriesSliceData,
      list: [mockedEntry],
    });
  });

  it('removes entry on "remove" action', () => {
    testedStore.dispatch(remove('entry-1'));

    const entriesSliceData = testedStore.getState().entries;
    expect(entriesSliceData).toEqual(initialState);
  });
});
