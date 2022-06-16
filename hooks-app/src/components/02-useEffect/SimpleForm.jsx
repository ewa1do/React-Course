import React, { useEffect, useState } from 'react';
import Message from './Message';

import './effects.css';

/**
 * ? useEffect is a hook which allow us to handle side effects
 * ? when something change/happens in our component
 */

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    // console.log('Hey!');
  }, []); // * the empty []: the effect only is applied once

  useEffect(() => {
    // console.log('formState changed');
  }, [formState]); // * the [state] the effect only applies changes on the state inside the []

  useEffect(() => {
    // console.log('email Changed');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
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

      {name === '123' && <Message />}
    </>
  );
};

export default SimpleForm;
