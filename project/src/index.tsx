import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { apartments } from './mocks/offer';

const offersCount = apartments.length;

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={offersCount} apartments={apartments} />
  </React.StrictMode>,
  document.getElementById('root'));
