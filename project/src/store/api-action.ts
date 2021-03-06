import { Reviews } from './../types/comment-types';
import { UserData } from './../types/user-data';
import { AuthData } from './../types/auth-data';
import { saveToken, dropToken } from './../services/token';
import {
  loadApartments,
  requireAuthorization,
  setError,
  setUserData,
  redirectToRoute,
  setNearby,
  setReview,
  setApartment
} from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR, AppRoute } from './../const';
import { Apartment, Apartments } from './../types/offer-type';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from './index';
import { errorHandle } from '../services/error-handle';

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchApartmentAction = createAsyncThunk(
  'data/fetchApartments',
  async () => {
    try {
      const { data } = await api.get<Apartments>(APIRoute.Apartments);
      store.dispatch(loadApartments(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserData(data));
    } catch {
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserData(data));
      store.dispatch(redirectToRoute(AppRoute.Main));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchApartment = createAsyncThunk(
  'property/fetchApartment',
  async (id: number) => {
    try {
      const { data } = await api.get<Apartment>(`${APIRoute.Apartments}/${id}`);
      store.dispatch(setApartment(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearby = createAsyncThunk(
  'property/fetchNearby',
  async (id: number) => {
    try {
      const { data } = await api.get<Apartments>(`${APIRoute.Apartments}/${id}/nearby`);
      store.dispatch(setNearby(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchReviews = createAsyncThunk(
  'property/fetchReviews',
  async (id: number) => {
    try {
      const { data } = await api.get<Reviews[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(setReview(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const sendReview = createAsyncThunk(
  'property/sendReview',
  async ({ apartmentId, review }: { apartmentId: number, review: Pick<Reviews, 'comment' | 'rating'> }) => {
    try {
      const { data } = await api.post<Reviews[]>(`${APIRoute.Comments}/${apartmentId}`, review);
      store.dispatch(setReview(data));
    } catch (error) {
      errorHandle(error);
      throw error;
    }
  },
);
