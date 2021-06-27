import { combineReducers, configureStore } from '@reduxjs/toolkit';

import entriesReducer from './entriesSlice';
import topicsReducer from './topicsSlice';

export const reducer = combineReducers({
  entries: entriesReducer,
  topics: topicsReducer,
});

export default configureStore({
  reducer,
});
