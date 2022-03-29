import { createAction } from '@reduxjs/toolkit';
import { Apartments } from '../types/offer-type';
export const loadApartments = createAction<Apartments>('main/loadApartments');
export const changeCity = createAction<string>('main/changeCity');


