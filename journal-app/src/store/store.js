import {
  configureStore,
  combineReducers,
  applyMiddleware,
  compose,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
});

export const store = configureStore(
  { reducer: reducers },
  composeEnhancers(applyMiddleware(thunk))
);
