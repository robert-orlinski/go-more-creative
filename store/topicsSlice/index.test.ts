import { configureStore } from '@reduxjs/toolkit';
import fetch from 'jest-fetch-mock';

import mockedTopics from '../../__mocks__/topics/initial.json';
import mockedTopic from '../../__mocks__/topics/single.json';

import * as helperFunctions from '../../helpers/functions';
import { initialState, randomTopicSelected, fetchTopics, statusMessages } from '../topicsSlice';

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
    fetch.mockResponse(JSON.stringify(mockedTopics));

    await testedStore.dispatch(fetchTopics());

    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual({
      list: mockedTopics.list,
      currentTopic: mockedTopics.firstTopic,
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
    await testedStore.dispatch({ type: fetchTopics.fulfilled.type, payload: mockedTopics });

    const topicsSliceData = testedStore.getState().topics;

    expect(topicsSliceData).toEqual({
      list: mockedTopics.list,
      currentTopic: mockedTopics.firstTopic,
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
  it('selects a random topic as the current topic on "randomTopicSelected" action', () => {
    testedStore.dispatch(randomTopicSelected());

    const topicsSliceData = testedStore.getState().topics;
    expect(topicsSliceData).toEqual({
      ...topicsSliceData,
      currentTopic: mockedTopic,
    });
  });
});
