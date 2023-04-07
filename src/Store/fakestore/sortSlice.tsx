import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const sortSlice = createSlice({
  name: "sortSlice",
  initialState: { sort: "asc" },
  reducers: {
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});
export const sortAction = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
