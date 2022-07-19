import { types } from '../types/types';

export const eventAddNew = (event) => {
  return {
    type: types.eventAddNew,
    payload: event,
  };
};

export const eventSetActive = (event) => {
  return {
    type: types.eventSetActive,
    payload: event,
  };
};

export const eventClearActiveEvent = () => {
  return {
    type: types.eventClearActiveNote,
  };
};

export const eventUpdated = (event) => {
  return {
    type: types.eventUpdated,
    payload: event,
  };
};

export const eventDeleted = () => {
  return {
    type: types.eventDeleted,
  };
};
