import React from 'react';
import ReactDOM from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
// import CounterApp from './CounterApp';
import './main.css';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <PrimeraApp greeting="Hello world!" />
    {/* <CounterApp value={23} /> */}
  </React.StrictMode>
);
