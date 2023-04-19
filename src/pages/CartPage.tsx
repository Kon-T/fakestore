import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

function CartPage() {
  const { products, cartQuantity, totalPrice } = useAppSelector(
    (state) => state.product.products
  );
  const { addProduct, removeProduct, decreaseQuantity, increaseQuantity } =
    useActions();
  return (
    <div>
      <Header />
      <div className="product">
        {products.map((item) => (
          <div className="cartproduct" key={item.id}>
            <img src={item.image} />
            <p>
              {item.title} x{item.quantity}
            </p>
            <span>{(item.quantity * item.price).toFixed(0)}$</span>
            <div className="cartproduct__buttons">
              {" "}
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
              {item.quantity}
              <button
                onClick={() => {
                  increaseQuantity(item);
                }}
              >
                +
              </button>
            </div>
          </div>
        ))}
        {cartQuantity === 0 && (
          <div style={{ marginTop: "10%", fontSize: "large" }}>
            EMPTY{" "}
            <div>
              <Link to={"/"}>
                <button>Home page</button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div>
        {totalPrice.toFixed(2)}$ TOTAL<button>Оформить заказ</button>
      </div>
    </div>
  );
}

export default CartPage;
