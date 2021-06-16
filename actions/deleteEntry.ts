import { Dispatch } from 'react';

import { remove } from '../store/entriesSlice';
import { deleteEntryFromApi } from '../utils/requests';

export const deleteEntry =
  (_id: string) => async (dispatch: Dispatch<{ payload: string; type: string }>) => {
    const removeEntry = await deleteEntryFromApi(_id);
    const isEntrydeleted = removeEntry.ok;

    if (isEntrydeleted) {
      dispatch(remove(_id));
    }
  };
