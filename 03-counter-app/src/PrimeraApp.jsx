// import React, { Fragment } from 'react';
import React from 'react';

const PrimeraApp = ({ greeting = 'Hello' }) => {
  const info = {
    name: 'Eduardo',
    age: 24,
  };

  return (
    <>
      <h1>{greeting}</h1>
      {/* <pre>{JSON.stringify(info, null, 3)}</pre> */}
      <h2>My first app</h2>
    </>
  );
};

export default PrimeraApp;
