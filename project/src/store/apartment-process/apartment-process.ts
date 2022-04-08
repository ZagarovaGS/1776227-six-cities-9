import { ErrorType } from './../../types/error';
import { AuthorizationStatus } from './../../const';
import { Cities } from '../../mocks/city';
import { Reviews } from '../../types/comment-types';
import { Apartments, Apartment, City } from '../../types/offer-type';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';


export type ApartmentsProcess = {
  apartments: Apartments;
  apartment: Apartment | null;
  isOffersLoaded: boolean;
  favoriteApartments: Apartments;
  isFavoritesLoaded: boolean;
  selectedApartment: Apartment | undefined;
  offerComments: Reviews[];
  nearby: Apartments;
  isDataLoaded: boolean;
  currentApartments: Apartments;
  city: City;
  authorizationStatus: AuthorizationStatus;
  error?: ErrorType | null;
};

const initialState: ApartmentsProcess = {
  apartments: [],
  apartment: null,
  favoriteApartments: [],
  isOffersLoaded: false,
  isFavoritesLoaded: false,
  selectedApartment: undefined,
  offerComments: [],
  nearby: [],
  isDataLoaded: false,
  currentApartments: [],
  city: Cities.Amsterdam,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

export const apartmentsData = createSlice({
  name: NameSpace.apartments,
  initialState,
  reducers: {
    loadApartments: (state, action) => {
      state.apartments = action.payload;
      state.isDataLoaded = true;
      state.currentApartments = state.apartments.filter((apartment) => apartment.city.name === state.city.name);
    },

    changeCity: (state, action) => {
      state.city = Cities[action.payload];
      state.currentApartments = state.apartments.filter((apartment) => apartment.city.name === state.city.name);
    },

    setNearby: (state, action) => {
      state.nearby = action.payload;
    },
    setApartment: (state, action) => {
      state.apartment = action.payload;
    },
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setNearby,
  loadApartments,
  changeCity,
  setApartment,
  requireAuthorization,
  setError,
} = apartmentsData.actions;
