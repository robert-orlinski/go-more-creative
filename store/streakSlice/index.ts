import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import dates from '../../helpers/dates';

import { StreakType } from '../types';
import { fetchEntries } from '../entriesSlice';
import { FetchedEntryType } from '../../types/global';

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
      .addCase(fetchEntries.fulfilled, (state, { payload }: PayloadAction<FetchedEntryType[]>) => {
        const getStreakToAdd = () => {
          const areEntries = payload.length;

          if (areEntries) {
            const lastEntry = payload[payload.length - 1];
            const lastEntryDayNumber = new Date(lastEntry.date).getDate();

            const isLastEntryNotOlderThanYesterday = lastEntryDayNumber >= dates.yesterday;

            return isLastEntryNotOlderThanYesterday ? lastEntry.streak : 0;
          } else {
            return 0;
          }
        };

        return {
          streak: getStreakToAdd(),
          statusMessage: statusMessages.fulfilled,
        };
      })
      .addCase(fetchEntries.rejected, (state) => ({
        ...state,
        statusMessage: statusMessages.rejected,
      })),
});

export const { streakUpdated } = slice.actions;

export default slice.reducer;
