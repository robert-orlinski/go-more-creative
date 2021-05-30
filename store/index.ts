import { configureStore } from '@reduxjs/toolkit';

import entriesReducer from './entriesSlice';

export default configureStore({
  reducer: {
    entries: entriesReducer,
  },
});
