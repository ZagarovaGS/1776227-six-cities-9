import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const offersCount = 122;
ReactDOM.render(
  <React.StrictMode>
    <App offersCount={offersCount} />
  </React.StrictMode>,
  document.getElementById('root'));
