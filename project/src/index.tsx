import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { checkAuthAction, fetchApartmentAction } from './store/api-action';

store.dispatch(fetchApartmentAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
