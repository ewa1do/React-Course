import {
  auth,
  googleAuthProvider,
  signInWithPopup,
} from '../firebase/firebaseConfig.js';

import { types } from '../types/types';

export const startLoginEmailAndPassword = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, 'Peter'));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuthProvider).then(
      ({ user }) => {
        // console.log(user);
        dispatch(login(user.uid, user.displayName));
      }
    );
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
