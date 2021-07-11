import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StreakType } from '../types';
import { fetchEntries } from '../entriesSlice';

export const statusMessages = {
  pending: 'loading...',
  fulfilled: undefined,
  rejected: "couldn't fetch streak.",
};

export const initialState: StreakType = {
  streak: 0,
  statusMessage: statusMessages.pending,
};

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    streakUpdated: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      streak: payload,
    }),
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEntries.pending, (state) => ({
        ...state,
        statusMessage: statusMessages.pending,
      }))
      .addCase(fetchEntries.fulfilled, (state, { payload }) => ({
        streak: payload[payload.length - 1].streak,
        statusMessage: statusMessages.fulfilled,
      }))
      .addCase(fetchEntries.rejected, (state) => ({
        ...state,
        statusMessage: statusMessages.rejected,
      })),
});

export const { streakUpdated } = slice.actions;

export default slice.reducer;
