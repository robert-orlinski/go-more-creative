import { combineReducers, configureStore } from '@reduxjs/toolkit';

import entriesReducer from './entriesSlice';
import topicsReducer from './topicsSlice';
import pointsReducer from './pointsSlice';

export const reducer = combineReducers({
  entries: entriesReducer,
  topics: topicsReducer,
  points: pointsReducer,
});

export default configureStore({
  reducer,
});
