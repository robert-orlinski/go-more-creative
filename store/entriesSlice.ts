import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getEntriesFromApi } from '../utils/requests';

import { FetchedEntryType } from '../types/global';

const initialState: FetchedEntryType[] = [];

export const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
  const response = await getEntriesFromApi();
  const data = await response.json();

  return data;
});

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<FetchedEntryType>) => {
      state.push(payload);
    },
    remove: (state, { payload }: PayloadAction<string>) =>
      state.filter(({ _id }) => _id !== payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntries.fulfilled, (state, { payload }) => payload);
  },
});

export const { add, remove } = slice.actions;

export default slice.reducer;
