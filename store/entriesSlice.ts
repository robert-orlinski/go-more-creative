import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getEntries } from '../requests/getEntries';

import { EntryType } from '../types/global';

const initialState: EntryType[] = [
  {
    _id: '',
    topic: '',
    ideas: [],
    date: new Date().toISOString(),
  },
];

export const fetchEntries = createAsyncThunk('entries/fetchEntries', async () => {
  const response = await getEntries();
  const data = await response.json();

  return data;
});

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    add: (state, { payload }: PayloadAction<EntryType>) => {
      state.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEntries.fulfilled, (state, { payload }) => payload);
  },
});

export const { add } = slice.actions;

export default slice.reducer;
