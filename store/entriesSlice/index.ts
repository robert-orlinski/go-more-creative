import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getEntriesFromApi } from '../../utils/requests';

import { FetchedEntryType } from '../../types/global';
import { EntriesType } from '../types';

export const statusMessages = {
  pending: 'loading...',
  fulfilled: undefined,
  rejected: "couldn't fetch entries. are you sure that everything is ok with your database?",
};

export const initialState: EntriesType = {
  list: [],
  statusMessage: statusMessages.pending,
};

export const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
  const response = await getEntriesFromApi();
  const data = await response.json();

  return data;
});

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    entryAdded: ({ list }, { payload }: PayloadAction<FetchedEntryType>) => {
      list.push(payload);
    },
    entryRemoved: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      list: state.list.filter(({ _id }) => _id !== payload),
    }),
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEntries.pending, (state) => ({
        ...state,
        statusMessage: statusMessages.pending,
      }))
      .addCase(fetchEntries.fulfilled, (state, { payload }) => ({
        list: payload,
        statusMessage: statusMessages.fulfilled,
      }))
      .addCase(fetchEntries.rejected, (state) => ({
        ...state,
        statusMessage: statusMessages.rejected,
      })),
});

export const { entryAdded, entryRemoved } = slice.actions;

export default slice.reducer;
