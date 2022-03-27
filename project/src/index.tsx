import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { CITY } from './mocks/city';
import { apartments } from './mocks/offer';
import { reviews } from './mocks/reviews';
import { store } from './store';


const offersCount = 122;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersCount={offersCount} apartments={apartments} city={CITY} reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
