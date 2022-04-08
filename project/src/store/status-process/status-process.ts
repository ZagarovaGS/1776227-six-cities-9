import { createSlice } from '@reduxjs/toolkit';
import { ErrorType } from './../../types/error';
import { NameSpace, AuthorizationStatus } from './../../const';
type StatusProcess = {
  authorizationStatus: AuthorizationStatus;
  error?: ErrorType | null;
};

const initialState: StatusProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

export const status = createSlice({
  name: NameSpace.apartments,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  requireAuthorization,
  setError,
} = status.actions;
