import { status } from './status-process/status-process';
import { userData } from './user-process/user-process';
import { apartmentsData } from './apartment-process/apartment-process';
import { NameSpace } from './../const';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [NameSpace.apartments]: apartmentsData.reducer,
  [NameSpace.user]: userData.reducer,
  [NameSpace.status]: status.reducer,
});
