import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signup(state, action) {
      // Logic changed: Initial signup only stores email (or basic user data).
      // isLoggedIn is NOT set to true here.
      state.user = { email: action.payload.email }; // Ensure only email is stored initially
      state.isLoggedIn = false; // Explicitly set to false or keep as initial state
    },
    updateUserProfile(state, action) {
      // This reducer updates the user profile with more details
      // It merges the new payload data into the existing user object
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true; // isLoggedIn is set to true ONLY after profile is completed
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, signup, updateUserProfile, logout } = authSlice.actions;
export default authSlice.reducer;
