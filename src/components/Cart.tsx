import React from "react";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IProduct } from "../models/models";

export function Cart() {
  const { products, cartQuantity, totalPrice } = useAppSelector(
    (state) => state.product.products
  );
  const { addProduct, removeProduct, decreaseQuantity, increaseQuantity } =
    useActions();
  return (
    <div className="cart">
      Cart
      {products.map((item) => (
        <div className="cartproduct" key={item.id}>
          <img src={item.image} />
          {item.title}x{item.quantity}
          <span>{(item.quantity * item.price).toFixed(2)}$</span>
          <button
            onClick={() => {
              removeProduct(item);
            }}
          >
            X
          </button>
          <button
            onClick={() => {
              decreaseQuantity(item);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              increaseQuantity(item);
            }}
          >
            +
          </button>
          {totalPrice} TOTAL
        </div>
      ))}
      {cartQuantity === 0 && (
        <div style={{ marginTop: "50%", fontSize: "large" }}>EMPTY</div>
      )}
    </div>
  );
}
