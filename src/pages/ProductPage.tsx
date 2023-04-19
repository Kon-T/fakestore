import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IProduct } from "../models/models";
import { useGetSingleProductQuery } from "../Store/fakestore/fakestore.api";

function ProductPage() {
  const { id } = useParams();
  const { isError, isLoading, data } = useGetSingleProductQuery(id as string);
  const { products, cartQuantity } = useAppSelector(
    (state) => state.product.products
  );
  const { addProduct, removeProduct, getItemQuantity } = useActions();
  const quantity = products.find((curr) => curr.id === data?.id)?.quantity;
  const addToCart = (item: IProduct) => {
    addProduct(item);
  };
  return (
    <div>
      <Header />
      <div>
        <img width={440} height={540} src={data?.image} alt="" />
      </div>
      <div>{data?.title}</div>
      {quantity == undefined ? (
        <button onClick={() => addProduct(data as IProduct)}>
          ADD TO CART
        </button>
      ) : (
        <button onClick={() => removeProduct(data as IProduct)}>
          REMOVE FROM CART
        </button>
      )}

      <span>{}</span>
    </div>
  );
}

export default ProductPage;
