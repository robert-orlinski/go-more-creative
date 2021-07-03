import { configureStore } from '@reduxjs/toolkit';
import fetch from 'jest-fetch-mock';

import mockedEntriesArray from '../../__mocks__/entries/multiple.json';

import { fetchEntries } from '../entriesSlice';
import { initialState, pointsAdded, pointsRemoved, statusMessages } from '.';

import { reducer } from '..';

let testedStore: any;

beforeEach(() => {
  testedStore = configureStore({ reducer });
});

describe('initial state', () => {
  it('have initial state on first render', () => {
    const pointsSliceData = testedStore.getState().points;

    expect(pointsSliceData).toEqual(initialState);
  });
});

describe('thunks', () => {
  it('adds points to the store on successful thunk resolve and displays proper message', async () => {
    fetch.mockResponse(JSON.stringify(mockedEntriesArray));

    await testedStore.dispatch(fetchEntries());

    const pointsSliceData = testedStore.getState().points;

    expect(pointsSliceData).toEqual({
      points: 60,
      statusMessage: statusMessages.fulfilled,
    });
  });
});

describe('extra reducers', () => {
  it('returns initial state with pending message when pending extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.pending.type });

    const pointsSliceData = testedStore.getState().points;

    expect(pointsSliceData).toEqual(initialState);
  });

  it('returns initial state with fullfiled message when fullfiled extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.fulfilled.type, payload: mockedEntriesArray });

    const pointsSliceData = testedStore.getState().points;

    expect(pointsSliceData).toEqual({
      points: 60,
      statusMessage: statusMessages.fulfilled,
    });
  });

  it('returns initial state with rejected message when rejected extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchEntries.rejected.type });

    const pointsSliceData = testedStore.getState().points;

    expect(pointsSliceData).toEqual({
      ...initialState,
      statusMessage: statusMessages.rejected,
    });
  });
});

describe('actions', () => {
  it('adds points on "pointsAdded" action', () => {
    testedStore.dispatch(pointsAdded(10));

    const pointsSliceData = testedStore.getState().points;
    expect(pointsSliceData).toEqual({
      ...pointsSliceData,
      points: 10,
    });
  });

  it('removes points on "pointsRemoved" action', () => {
    testedStore.dispatch(pointsRemoved(10));

    const pointsSliceData = testedStore.getState().points;
    expect(pointsSliceData).toEqual({
      ...initialState,
      points: -10,
    });
  });
});
