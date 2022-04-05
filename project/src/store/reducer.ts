import { Reviews } from './../types/comment-types';
import { UserData } from './../types/auth-data';
import { ErrorType } from './../types/error';
import { AuthorizationStatus } from './../const';
import { Apartments, City } from './../types/offer-type';
import { changeCity, loadApartments, requireAuthorization, setError, setUserData, setNearby, setReview, loadComment } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Cities } from '../mocks/city';

type initionalStateType = {
  apartments: Apartments;
  currentApartments: Apartments;
  city: City;
  price: number;
  authorizationStatus: AuthorizationStatus;
  error?: ErrorType | null;
  isDataLoaded: boolean;
  userData: UserData | null;
  nearby: Apartments;
  comments: Reviews[];
  userComment: Reviews | null;
};

const initialState: initionalStateType = {
  city: Cities.Amsterdam,
  apartments: [],
  currentApartments: [],
  price: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
  isDataLoaded: false,
  userData: null,
  nearby: [],
  comments: [],
  userComment: null,
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
    })
    .addCase(setNearby, (state, action) => {
      state.nearby = action.payload;
    })
    .addCase(setReview, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadComment, (state, action) => {
      state.userComment = action.payload;
    })
});

export { reducer };
