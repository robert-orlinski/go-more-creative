import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getTopicsFromApi } from '../utils/requests';

import { getRandomItemFromArray } from '../helpers/functions';
import { TopicsType } from '../types/global';

const initialState: TopicsType = {
  list: [
    {
      _id: '',
      name: '',
      level: 'easy',
    },
  ],
  currentTopic: {
    _id: '',
    name: '',
    level: 'easy',
  },
};

export const fetchTopics = createAsyncThunk('topics/fetchTopics', async () => {
  const response = await getTopicsFromApi();
  const data = await response.json();

  return data;
});

const slice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    select: (state) => ({
      ...state,
      currentTopic: getRandomItemFromArray(state.list),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopics.fulfilled, (state, { payload }) => ({
      list: payload,
      currentTopic: getRandomItemFromArray(payload),
    }));
  },
});

export const { select } = slice.actions;

export default slice.reducer;
