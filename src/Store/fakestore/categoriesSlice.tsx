import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: { category: "" },
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
  },
});
export const categoriesActions = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
