import { createSlice } from '@reduxjs/toolkit';
import {
  signUpThunk,
  signInThunk,
  logOutThunk,
  currentThunk,
} from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLoading: false,
    errorMessage: '',
  },
  extraReducers: {
    [signUpThunk.pending](state) {
      state.isLoading = true;
    },
    [signUpThunk.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.errorMessage = '';
      state.isLoggedIn = true;
    },
    [signUpThunk.rejected](state, { payload }) {
      state.user = null;
      state.token = null;
      state.errorMessage = payload;
      state.isLoading = false;
    },
    [signInThunk.pending](state) {
      state.isLoading = true;
    },
    [signInThunk.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoading = false;
      state.errorMessage = '';
    },
    [signInThunk.rejected](state, { payload }) {
      state.user = null;
      state.token = null;
      state.errorMessage = payload;
      state.isLoading = false;
    },
    [logOutThunk.pending](state) {
      state.isLoading = true;
    },
    [logOutThunk.fulfilled](state) {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      state.errorMessage = '';
    },
    [logOutThunk.rejected](state, { payload }) {
      state.user = null;
      state.token = null;
      state.errorMessage = payload;
      state.isLoading = false;
    },
    [currentThunk.pending](state) {
      state.isLoading = true;
    },
    [currentThunk.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoading = false;
      state.errorMessage = '';
    },
    [currentThunk.rejected](state, { payload }) {
      state.user = null;
      state.token = null;
      state.errorMessage = payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
