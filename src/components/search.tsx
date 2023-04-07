import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stringify } from "uuid";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { searchActions, searchReducer } from "../Store/fakestore/searchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const action = searchActions.setSearch;
  const searchX = useAppSelector((state) => state.search);
  console.log(searchX);
  return (
    <div>
      <input
        value={searchX.search}
        onChange={(event) => dispatch(action(event.target.value))}
      ></input>
      <button onClick={() => dispatch(action(""))}>x</button>
    </div>
  );
}
