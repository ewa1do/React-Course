import React from 'react';
// ? PropTypes are used to define features such as types or requirements on the props
import PropTypes from 'prop-types';

const PrimeraApp = ({ greeting, subtitle }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

PrimeraApp.propTypes = {
  greeting: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitle: 'My first App!',
};

export default PrimeraApp;
