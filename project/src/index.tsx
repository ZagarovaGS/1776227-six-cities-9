import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { apartments } from './mocks/offer';


const offersCount = 122;
const [apartment] = apartments;

ReactDOM.render(
  <React.StrictMode>
    <App offersCount={offersCount} apartments={apartments} apartment={apartment} />
  </React.StrictMode>,
  document.getElementById('root'));
