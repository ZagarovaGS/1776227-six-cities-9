import { UserData } from './../types/user-data';
import { AuthorizationStatus } from './../const';
import { createAction } from '@reduxjs/toolkit';
import { Apartments } from '../types/offer-type';
export const loadApartments = createAction<Apartments>('main/loadApartments');
export const changeCity = createAction<string>('main/changeCity');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string>('main/setError');
export const setUserData = createAction<UserData>('login/setUserData');
