import { configureStore } from '@reduxjs/toolkit';
import fetch from 'jest-fetch-mock';

import mockedTopicsArray from '../../__mocks__/topics/multiple.json';
import mockedTopic from '../../__mocks__/topics/single.json';

import * as helperFunctions from '../../helpers/functions';
import { initialState, selectedRandomTopic, fetchTopics, statusMessages } from '../topicsSlice';

import { reducer } from '..';

let testedStore: any;

beforeEach(() => {
  testedStore = configureStore({ reducer });

  jest
    .spyOn(helperFunctions, 'getRandomItemFromArrayOrNullIfThereIsNoItems')
    .mockReturnValueOnce(mockedTopic);
});

describe('initial state', () => {
  it('have initial state on first render', () => {
    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual(initialState);
  });
});

describe('thunks', () => {
  it('adds topics to the store on successful thunk resolve and displays proper message', async () => {
    fetch.mockResponse(JSON.stringify(mockedTopicsArray));

    await testedStore.dispatch(fetchTopics());

    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual({
      list: mockedTopicsArray,
      currentTopic: mockedTopic,
      statusMessage: statusMessages.fulfilled,
    });
  });
});

describe('extra reducers', () => {
  it('returns initial state with pending message when pending extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchTopics.pending.type });

    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual(initialState);
  });

  it('returns initial state with fullfiled message when fullfiled extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchTopics.fulfilled.type, payload: mockedTopicsArray });

    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual({
      list: mockedTopicsArray,
      currentTopic: mockedTopic,
      statusMessage: statusMessages.fulfilled,
    });
  });

  it('returns initial state with rejected message when rejected extra reducer is at work', async () => {
    await testedStore.dispatch({ type: fetchTopics.rejected.type });

    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual({
      ...initialState,
      statusMessage: statusMessages.rejected,
    });
  });
});

describe('actions', () => {
  it('selects a random topic as the current topic on "selectedRandomTopic" action', () => {
    testedStore.dispatch(selectedRandomTopic());

    const topicsSliceData = testedStore.getState().topics;
    expect(topicsSliceData).toEqual({
      ...topicsSliceData,
      currentTopic: mockedTopic,
    });
  });
});
