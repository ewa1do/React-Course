import React from 'react';
import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';

import './MultipleCustomHooks.css';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const state = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { loading, data } = state;

  // let author = undefined;
  // let quote = undefined;

  // if (data !== null) {
  //   author = data[0].author;
  //   quote = data[0].quote;
  // }

  // * !!data === false, first the vars are setted as 'undefined',
  // * then when the state changes it returns the data[0]
  const { author, quote } = !!data && data[0];

  console.log(author, quote);

  const loadingDiv = () => (
    <div className='alert alert-info text-center'>
      loading...
    </div>
  );

  const blockquote = () => (
    <blockquote className='blockquote text-end'>
      <p className='mb-3'>{quote}</p>
      <footer className='blockquote-footer'>{author}</footer>
    </blockquote>
  );

  return (
    <div>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? loadingDiv() : blockquote()}

      <button
        className='btn btn-primary'
        onClick={increment}
      >
        Next Quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
