import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordAndName } from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'Eduardo',
    email: 'eavera97@gmail.com',
    password: 123456,
    passwordConfirm: 123456,
  });

  const { name, email, password, passwordConfirm } = formValues;

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      console.log('Formulario correcto');
      dispatch(
        startRegisterWithEmailPasswordAndName(
          email,
          password,
          name
        )
      );
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is Required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if (
      password !== passwordConfirm ||
      password.length < 5
    ) {
      dispatch(
        setError(
          'Password should be at least 6 characters and match each other'
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleSubmitRegister}>
        {msgError && (
          <div className='auth__alert-error'>{msgError}</div>
        )}

        <input
          type='text'
          placeholder='Name'
          name='name'
          className='auth__input'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          placeholder='Email'
          name='email'
          className='auth__input'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          className='auth__input'
          value={password}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='passwordConfirm'
          className='auth__input'
          value={passwordConfirm}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          className='btn btn-primary btn-block mb-5'
        >
          Register
        </button>

        <Link
          to='/auth/login'
          className='link mt-5'
        >
          Already Registered?
        </Link>
      </form>
    </>
  );
};
