import { combineReducers, configureStore } from '@reduxjs/toolkit';

import entriesReducer from './entriesSlice';
import topicsReducer from './topicsSlice';
import pointsReducer from './pointsSlice';
import streakReducer from './streakSlice';

export const reducer = combineReducers({
  entries: entriesReducer,
  topics: topicsReducer,
  points: pointsReducer,
  streak: streakReducer,
});

export default configureStore({
  reducer,
});
