import React, { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import './layout.css';

const Layout = () => {
  const { counter, increment } = useCounter(1);

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { data } = state;
  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  // console.log(quote);

  const loadingDiv = () => (
    <div className='alert alert-info text-center'>
      loading...
    </div>
  );

  const blockquote = () => (
    <blockquote className='blockquote text-end'>
      <p
        className='mb-3'
        ref={pTag}
      >
        {quote}
      </p>
    </blockquote>
  );

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      {blockquote()}

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Next Quote
      </button>
    </div>
  );
};

export default Layout;
