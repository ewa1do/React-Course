import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore({ reducer: reducers });
