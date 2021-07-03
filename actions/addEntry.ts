import { Dispatch } from 'react';
import { FieldValues, UseFormSetError } from 'react-hook-form';

import { addEntryToApi } from '../utils/requests';

import { EntryType, FetchedEntryType } from '../types/global';

import { entryAdded } from '../store/entriesSlice';
import { pointsAdded } from '../store/pointsSlice';
import { selectedRandomTopic } from '../store/topicsSlice';

export const addEntry =
  (data: EntryType, setError: UseFormSetError<FieldValues>) =>
  async (dispatch: Dispatch<{ payload?: FetchedEntryType | number; type: string }>) => {
    const saveEntry = await addEntryToApi(data);
    const savedEntry = await saveEntry.json();

    const isEntrySaved = saveEntry.ok;
    const { pointsGained } = savedEntry;

    if (isEntrySaved) {
      dispatch(entryAdded(savedEntry));
      dispatch(pointsAdded(pointsGained));
      dispatch(selectedRandomTopic());
    } else {
      const errorMessage = await saveEntry.text();

      setError('form', {
        type: 'server',
        message: errorMessage,
      });
    }
  };
