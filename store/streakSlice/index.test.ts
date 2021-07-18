import { configureStore } from '@reduxjs/toolkit';
import fetch from 'jest-fetch-mock';

import mockedEntriesArray from '../../__mocks__/entries/initial.json';
import singleMockedEntry from '../../__mocks__/entries/single.json';

import dates from '../../helpers/dates';
import { initialState, streakUpdated, statusMessages } from '../streakSlice';
import { fetchEntries } from '../entriesSlice';

import { reducer } from '..';

let testedStore: any;

beforeEach(() => {
  testedStore = configureStore({ reducer });
  jest.resetModules();
});

describe('initial state', () => {
  it('have initial state on first render', () => {
    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual(initialState);
  });
});

describe('thunks', () => {
  it('adds streak to the store on successful thunk resolve and displays proper message', async () => {
    fetch.mockResponse(JSON.stringify(mockedEntriesArray));

    await testedStore.dispatch(fetchEntries());

    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual({
      streak: 3,
      statusMessage: statusMessages.fulfilled,
    });
  });
});

describe('extra reducers', () => {
  it('returns initial state with pending message when pending extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.pending.type });

    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual(initialState);
  });

  it('returns initial state with fulfilled message when fulfilled extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.fulfilled.type, payload: mockedEntriesArray });

    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual({
      streak: 3,
      statusMessage: statusMessages.fulfilled,
    });
  });

  it('returns 0 with fulfilled message when there is no entries', async () => {
    await testedStore.dispatch({
      type: fetchEntries.fulfilled.type,
      payload: [],
    });

    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual({
      streak: 0,
      statusMessage: statusMessages.fulfilled,
    });
  });

  it('returns 0 with fulfilled message when last entry is older than yesterday', async () => {
    jest.spyOn(dates, 'yesterday', 'get').mockReturnValueOnce(16);

    await testedStore.dispatch({
      type: fetchEntries.fulfilled.type,
      payload: [
        {
          ...singleMockedEntry,
          date: '2021-06-15T18:15:54.679Z',
        },
      ],
    });

    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual({
      streak: 0,
      statusMessage: statusMessages.fulfilled,
    });
  });

  it('returns initial state with rejected message when rejected extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.rejected.type });

    const streakSliceData = testedStore.getState().streak;

    expect(streakSliceData).toEqual({
      ...initialState,
      statusMessage: statusMessages.rejected,
    });
  });
});

describe('actions', () => {
  it('adds entry on "streakUpdated" action', () => {
    testedStore.dispatch(streakUpdated(2));

    const streakSliceData = testedStore.getState().streak;
    expect(streakSliceData).toEqual({
      ...streakSliceData,
      streak: 2,
    });
  });
});
