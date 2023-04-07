import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { searchSlice } from "../Store/fakestore/searchSlice";
import { cartSlice, productReducer } from "./fakestore/Cart";
import { categoriesSlice } from "./fakestore/categoriesSlice";
import { fakestoreApi } from "./fakestore/fakestore.api";
import { sortSlice } from "./fakestore/sortSlice";

export const store = configureStore({
  reducer: {
    [fakestoreApi.reducerPath]: fakestoreApi.reducer,
    product: productReducer,
    search: searchSlice.reducer,
    categoriesSlice: categoriesSlice.reducer,
    sortSlice: sortSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakestoreApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export default store;
