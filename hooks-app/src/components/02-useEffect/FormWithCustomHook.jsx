import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';

import './effects.css';

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log('Email has changed');
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Your name'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Your Password'
          autoComplete='off'
          value={password}
          onChange={handleInputChange}
        />

        <button
          className='btn btn-primary'
          type='submit'
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default FormWithCustomHook;
