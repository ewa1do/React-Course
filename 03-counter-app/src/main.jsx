import React from 'react';
import ReactDOM from 'react-dom';

const greeting = <h1>Hello World!</h1>;

const root = document.getElementById('root');

console.log(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <h1>{greeting}</h1>
  </React.StrictMode>
);
