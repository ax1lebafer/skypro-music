import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
