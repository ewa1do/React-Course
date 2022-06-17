import React from 'react';

// ? memo returns the memorize form of the component, and only changes
// ? if the props changes

const Small = React.memo(({ value }) => {
  console.log('me volvi a llamar :c ');

  return <small>{value}</small>;
});

export default Small;
