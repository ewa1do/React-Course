import React, { useRef } from 'react';

import '../03-examples/MultipleCustomHooks.css';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className='form-control'
        placeholder='Your name'
      />

      <button
        className='btn btn-outline-primary mt-4'
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
