import React, { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const toggleComponent = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button
        className='btn btn-warning mt-3'
        onClick={toggleComponent}
      >
        Toggle Quote
      </button>
    </div>
  );
};

export default RealExampleRef;
