import { combineReducers } from '@reduxjs/toolkit';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  // TODO: AuthReducer
  // TODO: CalendarReducer
});
