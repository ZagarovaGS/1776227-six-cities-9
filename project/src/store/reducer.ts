import { Apartments, City } from './../types/offer-type';
import { changeCity } from './action';
import { createReducer } from '@reduxjs/toolkit';

type initionalStateType = {
  apartments: Apartments;
  city: City;
};

const initialState: initionalStateType = {
  city: {
    'location': {
      'latitude': 52.380216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  apartments: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = initialState.city;
    })
});

export { reducer };
