import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productActions } from "../Store/fakestore/Cart";

const actions = {
  ...productActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
