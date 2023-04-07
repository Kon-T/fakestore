import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
type searchType = { search: string };
const initialState = { search: "asd" } as searchType;
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
