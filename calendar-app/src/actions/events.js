import Swal from 'sweetalert2';

import { fetchConToken } from '../helpes/fetch';
import { prepareEvents } from '../helpes/prepareEvents';
import { types } from '../types/types';

export const eventStartAddNew = (event) => {
  return async (dispatch, getState) => {
    const { uid, name } = getState().auth;

    try {
      const res = await fetchConToken('events', event, 'POST');
      const body = await res.json();

      if (body.ok) {
        event.id = body.event.id;
        event.user = {
          _id: uid,
          name,
        };

        // console.log(event);
        dispatch(eventAddNew(event));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const eventAddNew = (event) => {
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

export const eventStartUpdate = (event) => {
  return async (dispatch) => {
    try {
      // console.log(event);
      const res = await fetchConToken(
        `events/${event.id}`,
        event,
        'PUT'
      );
      const body = await res.json();

      if (body.ok) {
        dispatch(eventUpdated(event));
      } else {
        Swal.fire('Error', body.msg, 'error');
      }

      console.log(body);
    } catch (error) {
      console.log(error);
    }
  };
};

const eventUpdated = (event) => {
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

export const eventStartLoading = () => {
  return async (dispatch) => {
    try {
      const res = await fetchConToken('events');
      const body = await res.json();

      let { allEvents } = body.events;
      allEvents = prepareEvents(allEvents);

      dispatch(eventLoaded(allEvents));
    } catch (error) {
      console.log(error);
    }
  };
};

const eventLoaded = (events) => {
  return {
    type: types.eventLoaded,
    payload: events,
  };
};
