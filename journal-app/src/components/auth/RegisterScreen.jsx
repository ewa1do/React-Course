import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: 'Eduardo',
    email: 'eavera97@gmail.com',
    password: 123456,
    passwordConfirm: 123456,
  });

  const { name, email, password, passwordConfirm } = formValues;

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    //console.log(name, email, password, passwordConfirm);

    if (isFormValid()) {
      console.log('Formulario correcto');
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      console.log('Name is Required');
      return false;
    } else if (!validator.isEmail(email)) {
      console.log('Email is not valid');
      return false;
    } else if (
      password !== passwordConfirm ||
      password.length < 5
    ) {
      console.log(
        'Password should be at least 6 characters and match each other'
      );
      return false;
    }

    return true;
  };

  return (
    <>
      <h3 className='auth__title'>Register</h3>

      <form onSubmit={handleSubmitRegister}>
        <div className='auth__alert-error'>Hola Mundo</div>

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
