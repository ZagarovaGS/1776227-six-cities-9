//import { apartments } from './../mocks/offer';
import { Apartments, City } from './../types/offer-type';
import { changeCity, loadApartments } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/city';

type initionalStateType = {
  apartments: Apartments;
  currentApartments: Apartments;
  city: City;
  price: number;
};

const initialState: initionalStateType = {
  city: Cities.Amsterdam,
  apartments: [],
  currentApartments: [],
  price: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadApartments, (state, action) => {
      state.apartments = action.payload;
      state.currentApartments = state.apartments.filter((apartment) => apartment.city.name === state.city.name);
    })
    .addCase(changeCity, (state, action) => {
      state.city = Cities[action.payload];
      state.currentApartments = state.apartments.filter((apartment) => apartment.city.name === state.city.name);
    });
});

export { reducer };
