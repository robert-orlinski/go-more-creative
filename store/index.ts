import { combineReducers, configureStore } from '@reduxjs/toolkit';

import entriesReducer from './entriesSlice';
import topicsReducer from './topicsSlice';

const reducer = combineReducers({
  entries: entriesReducer,
  topics: topicsReducer,
});

export default configureStore({
  reducer,
});
