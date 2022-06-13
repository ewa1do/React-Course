import React from 'react';
// ? PropTypes are used to define features such as types or requirements on the props
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

const PrimeraApp = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <h2>My first app</h2>
    </>
  );
};

PrimeraApp.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default PrimeraApp;
