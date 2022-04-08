import { Reviews } from './../../types/comment-types';
import { UserData } from './../../types/user-data';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

type initionalStateType = {
  userData: UserData | null;
  comments: Reviews[];
  userComment: Reviews | null;
};

const initialState: initionalStateType = {
  userData: null,
  comments: [],
  userComment: null,
};

export const userData = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setReview: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setUserData, setReview } = userData.actions;
