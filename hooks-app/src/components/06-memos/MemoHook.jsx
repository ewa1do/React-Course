import React, { useState, useMemo } from 'react';

import useCounter from '../../hooks/useCounter.js';
import { heavyProcess } from '../../helpers/heavyProcess.js';

import '../02-useEffect/effects.css';

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);

  const [show, setShow] = useState(true);

  const memoHeavyProcess = useMemo(
    () => heavyProcess(counter),
    [counter]
  );

  return (
    <div>
      <h1>MemoHook:</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p> {memoHeavyProcess} </p>

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        +1
      </button>

      <button
        className='btn btn-outline-danger ms-3'
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide: {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
