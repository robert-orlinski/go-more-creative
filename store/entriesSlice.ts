import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getEntries } from '../requests/getEntries';

import { EntriesType } from './types';

const initialState: EntriesType = {
  entries: [],
  loading: 'idle',
  error: null,
};

export const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
  const response = await getEntries();
  const data = await response.json();

  return data;
});

const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEntries.fulfilled, (state, action) => action.payload);
  },
});

export default entriesSlice.reducer;
