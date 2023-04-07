import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/models";
const PRODUCTS = "PRODUCTS";
interface ProductState {
  products: { products: IProduct[]; cartQuantity: number; totalPrice: number };
}
const initialState: ProductState = {
  products: JSON.parse(
    localStorage.getItem(PRODUCTS) ??
      '{"products":[],"cartQuantity":0,"totalPrice":0}'
  ),
  // products: { products: [], cartQuantity: 0, totalPrice: 0 },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      const findItem = state.products.products.find(
        (curr) => curr.id === action.payload.id
      );

      if (findItem) {
        findItem.quantity++;
      } else
        state.products.products.push({
          ...action.payload,
          quantity: 1,
        });

      state.products.cartQuantity++;
      state.products.totalPrice = parseFloat(
        (state.products.totalPrice + action.payload.price).toFixed(2)
      );

      localStorage.setItem(PRODUCTS, JSON.stringify(state.products));
    },
    getItemQuantity(state, action: PayloadAction<number>) {
      state.products.products.find((i) => {
        i.id === action.payload;
      })?.quantity;
    },
    removeProduct(state, action: PayloadAction<IProduct>) {
      const findItem = state.products.products.find(
        (curr) => curr.id === action.payload.id
      );
      if (findItem) {
        state.products.totalPrice = parseFloat(
          (
            state.products.totalPrice -
            findItem.quantity * findItem.price
          ).toFixed(2)
        );
        state.products.cartQuantity =
          state.products.cartQuantity - action.payload.quantity;
        state.products.products = state.products.products.filter(
          (f) => f.id !== action.payload.id
        );
      }
      localStorage.setItem(PRODUCTS, JSON.stringify(state.products));
    },
    decreaseQuantity(state, action: PayloadAction<IProduct>) {
      const findItem = state.products.products.find(
        (curr) => curr.id === action.payload.id
      );
      if (findItem) {
        if (findItem?.quantity > 1) {
          findItem.quantity--;
          state.products.cartQuantity--;

          state.products.totalPrice = parseFloat(
            (state.products.totalPrice - findItem.price).toFixed(2)
          );
          localStorage.setItem(PRODUCTS, JSON.stringify(state.products));
        }
      }

      localStorage.setItem(PRODUCTS, JSON.stringify(state.products));
    },
    increaseQuantity(state, action: PayloadAction<IProduct>) {
      const findItem = state.products.products.find(
        (curr) => curr.id === action.payload.id
      );
      if (findItem) {
        findItem.quantity++;
        state.products.cartQuantity++;

        state.products.totalPrice = parseFloat(
          (state.products.totalPrice + findItem.price).toFixed(2)
        );
      }
      localStorage.setItem(PRODUCTS, JSON.stringify(state.products));
    },
    getProductQuantity(state, action: PayloadAction<any>) {
      state.products.products.find((curr) => curr.id === action.payload.id)
        ?.quantity;
    },
  },
});
export const productActions = cartSlice.actions;
export const productReducer = cartSlice.reducer;
