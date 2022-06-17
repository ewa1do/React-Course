import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volvi a generar :c ');

  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(5);
      }}
    >
      ShowIncrement
    </button>
  );
});

export default ShowIncrement;
