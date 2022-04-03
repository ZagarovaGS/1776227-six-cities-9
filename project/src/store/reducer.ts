import { UserData } from './../types/auth-data';
import { ErrorType } from './../types/error';
import { AuthorizationStatus } from './../const';
import { Apartments, City } from './../types/offer-type';
import { changeCity, loadApartments, requireAuthorization, setError, setUserData } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/city';

type initionalStateType = {
  apartments: Apartments;
  currentApartments: Apartments;
  city: City;
  price: number;
  authorizationStatus: AuthorizationStatus;
  error: ErrorType;
  isDataLoaded: boolean;
  userData: UserData | null;
};

const initialState: initionalStateType = {
  city: Cities.Amsterdam,
  apartments: [],
  currentApartments: [],
  price: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  userData: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
    token: '',
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadApartments, (state, action) => {
      state.apartments = action.payload;
      state.isDataLoaded = true;
      state.currentApartments = state.apartments.filter((apartment) => apartment.city.name === state.city.name);
    })
    .addCase(changeCity, (state, action) => {
      state.city = Cities[action.payload];
      state.currentApartments = state.apartments.filter((apartment) => apartment.city.name === state.city.name);
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
