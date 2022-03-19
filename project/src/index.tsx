import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { CITY } from './mocks/city';
import { apartments } from './mocks/offer';
import { reviews } from './mocks/reviews';


const offersCount = 122;

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={offersCount} apartments={apartments} city={CITY} reviews={reviews} />
  </React.StrictMode>,
  document.getElementById('root'));
