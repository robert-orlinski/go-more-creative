import { Dispatch } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';

import { addEntryToApi } from '../utils/requests';

import { EntryTypeToAdd, FetchedEntryType } from '../types/global';

import { entryAdded } from '../store/entriesSlice';
import { pointsAdded } from '../store/pointsSlice';
import { streakUpdated } from '../store/streakSlice';
import { randomTopicSelected } from '../store/topicsSlice';

export const addEntry =
  (data: EntryTypeToAdd, setError: UseFormSetError<FieldValues>) =>
  async (dispatch: Dispatch<{ payload?: FetchedEntryType | number; type: string }>) => {
    const saveEntry = await addEntryToApi(data);
    const savedEntry = await saveEntry.json();

    const isEntrySaved = saveEntry.ok;
    const { pointsGained, streak } = savedEntry;

    if (isEntrySaved) {
      dispatch(entryAdded(savedEntry));
      dispatch(pointsAdded(pointsGained));
      dispatch(streakUpdated(streak));
      dispatch(randomTopicSelected());
    } else {
      const errorMessage = await saveEntry.text();

      setError('form', {
        type: 'server',
        message: errorMessage,
      });
    }
  };
