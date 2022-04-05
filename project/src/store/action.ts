import { Reviews } from './../types/comment-types';
import { UserData } from './../types/user-data';
import { AuthorizationStatus, AppRoute } from './../const';
import { createAction } from '@reduxjs/toolkit';
import { Apartments } from '../types/offer-type';

export const loadApartments = createAction<Apartments>('main/loadApartments');
export const changeCity = createAction<string>('main/changeCity');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('main/setError');
export const setUserData = createAction<UserData>('login/setUserData');
export const redirectToRoute = createAction<AppRoute>('main/redirectToRoute');
export const setNearby = createAction<Apartments>('property/setNearby');
export const setReview = createAction<Reviews[]>('property/setReview');
export const loadComment = createAction<Reviews>('property/loadComment');
