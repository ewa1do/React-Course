import { fetchSinToken } from '../helpes/fetch';
import { types } from '../types/types';

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchSinToken(
      'auth',
      { email, password },
      'POST'
    );

    const body = await res.json();

    // console.log(body);

    if (body.ok) {
      localStorage.setItem('token', body.token);
      localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(login(body.user));
    }
  };
};

const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};
