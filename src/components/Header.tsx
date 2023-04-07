import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart.svg";
import { useAppSelector } from "../hooks/redux";
import logo from "../assets/logo.svg";

export function Header() {
  const { cartQuantity } = useAppSelector((state) => state.product.products);
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={logo} height="100" width="100" alt="logo" />
        <div>Logo</div>
      </Link>

      {location.pathname !== "/CartPage" && (
        <Link className="cartButton" to={"/CartPage"}>
          <img width={40} height={40} src={cartIcon} alt="cart" />
          {cartQuantity > 0 && (
            <span className="cartButton__cartQuantity">{cartQuantity}</span>
          )}
          CART
        </Link>
      )}
    </div>
  );
}

export default Header;
