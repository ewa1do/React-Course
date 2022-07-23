import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp';

import './styles.css';

// console.log(import.meta.env);

ReactDOM.createRoot(document.getElementById('app')).render(
  <CalendarApp />
);
