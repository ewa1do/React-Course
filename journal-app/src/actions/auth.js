import { types } from '../types/types';

export const startLoginEmailAndPassword = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'Peter'));
    }, 3500);
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};
