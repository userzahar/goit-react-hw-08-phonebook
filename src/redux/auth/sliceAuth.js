import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './thunkAuth';

const handleRegistration = (state, action) => {
  state.user = { ...action.payload.user };
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const handleLogin = (state, { payload }) => {
  state.user = { ...payload.user };
  state.token = payload.token;
  state.isLoggedIn = true;
};
const handleLogout = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      // .addCase(authOperations.register.pending, handleRegistration)
      .addCase(authOperations.register.fulfilled, handleRegistration)
      // .addCase(authOperations.register.rejected, handleRegistration);
      .addCase(authOperations.login.fulfilled, handleLogin)
      .addCase(authOperations.logOut.fulfilled, handleLogout);
  },
});

export const authReducer = authSlice.reducer;

//   .addMatcher(
//     isAnyOf(
//       getContactsThunk.pending,
//       createContactsThunk.pending,
//       deleteContactsThunk.pending
//     ),
//     handlePending
//   )

//   .addMatcher(
//     isAnyOf(
//       getContactsThunk.rejected,
//       createContactsThunk.rejected,
//       deleteContactsThunk.rejected
//     ),
//     handleRejected
