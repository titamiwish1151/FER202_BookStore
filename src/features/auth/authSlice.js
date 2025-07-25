import { createSlice } from "@reduxjs/toolkit";

// Lấy thông tin user từ localStorage (nếu có)
const savedUser = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: savedUser || null,
  isLoggedIn: !!savedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signup(state, action) {
      const user = { email: action.payload.email };
      state.user = user;
      state.isLoggedIn = false;
      localStorage.setItem("user", JSON.stringify(user));
    },
    updateUserProfile(state, action) {
      const updatedUser = { ...state.user, ...action.payload };
      state.user = updatedUser;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(updatedUser));
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, signup, updateUserProfile, logout } = authSlice.actions;
export default authSlice.reducer;
