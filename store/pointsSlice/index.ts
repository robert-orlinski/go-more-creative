import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FetchedEntryType } from '../../types/global';
import { PointsType } from '../types';
import { fetchEntries } from '../entriesSlice';

export const statusMessages = {
  pending: 'loading...',
  fulfilled: undefined,
  rejected: "couldn't fetch points.",
};

export const initialState: PointsType = {
  points: 0,
  statusMessage: statusMessages.pending,
};

const slice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    pointsAdded: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      points: state.points + payload,
    }),
    pointsRemoved: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      points: state.points - payload,
    }),
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchEntries.pending, (state) => ({
        ...state,
        statusMessage: statusMessages.pending,
      }))
      .addCase(fetchEntries.fulfilled, (state, { payload }) => ({
        points: payload.reduce((acc: number, val: FetchedEntryType) => acc + val.pointsGained, 0),
        statusMessage: statusMessages.fulfilled,
      }))
      .addCase(fetchEntries.rejected, (state) => ({
        ...state,
        statusMessage: statusMessages.rejected,
      })),
});

export const { pointsAdded, pointsRemoved } = slice.actions;

export default slice.reducer;
