import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { CITY } from './mocks/city';
import { apartments } from './mocks/offer';


const offersCount = 122;

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={offersCount} apartments={apartments} city={CITY} />
  </React.StrictMode>,
  document.getElementById('root'));
