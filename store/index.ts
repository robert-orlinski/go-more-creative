import { combineReducers, configureStore } from '@reduxjs/toolkit';

import entriesReducer from './entriesSlice';
import topicsReducer from './topicsSlice';
import currentUserReducer from './currentUserSlice';

const reducer = combineReducers({
  entries: entriesReducer,
  topics: topicsReducer,
  currentUserId: currentUserReducer,
});

export default configureStore({
  reducer,
});
