import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import './main.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <PrimeraApp greeting="Hello world!" />
  </React.StrictMode>
);
