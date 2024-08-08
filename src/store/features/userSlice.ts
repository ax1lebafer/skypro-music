import { UserType } from "@models/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = {
  user: UserType | null;
};

const initialState: UserStateType = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType | null>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
