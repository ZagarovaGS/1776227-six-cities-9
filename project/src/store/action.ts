import { Reviews } from '../types/comment-types';
import { UserData } from '../types/user-data';
import { AuthorizationStatus, AppRoute } from '../const';
import { createAction } from '@reduxjs/toolkit';
import { Apartment, Apartments } from '../types/offer-type';
import { ErrorType } from '../types/error';

export const loadApartments = createAction<Apartments>('main/loadApartments');
export const changeCity = createAction<string>('main/changeCity');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<ErrorType>('main/setError');
export const setUserData = createAction<UserData | null>('login/setUserData');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const setApartment = createAction<Apartment | null>('property/setApartment');
export const setNearby = createAction<Apartments>('property/setNearby');
export const setReview = createAction<Reviews[]>('property/setReview');
