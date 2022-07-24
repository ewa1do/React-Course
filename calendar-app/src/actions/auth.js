import Swal from 'sweetalert2';
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

    if (!body.ok) {
      return Swal.fire('Error', body.msg, 'error');
    }

    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());

    dispatch(login(body.user));
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    const res = await fetchSinToken(
      'auth/new',
      { name, email, password },
      'POST'
    );

    const body = await res.json();

    if (!body.ok) {
      return Swal.fire('Error', body.msg, 'error');
    }

    localStorage.setItem('token', body.token);
    localStorage.setItem('token-init-date', new Date().getTime());

    dispatch(
      login({
        uid: body.uid,
        name: body.name,
      })
    );
  };
};

const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};
