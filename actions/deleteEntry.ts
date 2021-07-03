import { Dispatch } from 'react';

import { entryRemoved } from '../store/entriesSlice';
import { pointsRemoved } from '../store/pointsSlice';
import { deleteEntryFromApi } from '../utils/requests';

export const deleteEntry =
  (_id: string, pointsToRemove: number) =>
  async (dispatch: Dispatch<{ payload: string | number; type: string }>) => {
    const removeEntry = await deleteEntryFromApi(_id);
    const isEntrydeleted = removeEntry.ok;

    if (isEntrydeleted) {
      dispatch(entryRemoved(_id));
      dispatch(pointsRemoved(pointsToRemove));
    }
  };
