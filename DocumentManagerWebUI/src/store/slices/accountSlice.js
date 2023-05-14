import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  role: null,
  isAuth: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    signIn: (state, { payload }) => {
      const { id, role } = payload;
      state.role = role;
      state.id = id;
      state.isAuth = true;
    },
    signOut: (state) => {
      state.isAuth = false;
      state.role = null;
      state.id = null;
    },
  },
});

export const { signIn, signOut } = accountSlice.actions;

export default accountSlice.reducer;
