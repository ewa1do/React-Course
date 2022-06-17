import React, { useCallback, useEffect, useState } from 'react';
import ShowIncrement from './ShowIncrement';

import '../02-useEffect/effects.css';

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (num) => {
      setCounter((count) => count + num);
    },
    [setCounter]
  );

  // useEffect(() => {
  //   // ???
  // }, [increment]) //se envia como dependencia la funcion del useCallback

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
