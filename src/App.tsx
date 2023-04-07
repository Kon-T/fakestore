import "./App.scss";
import { useActions } from "./hooks/actions";
import { useGetProductQuery } from "./Store/fakestore/fakestore.api";
import { useAppSelector } from "./hooks/redux";
import { IProduct } from "./models/models";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Categories from "./components/categories";
import Sort from "./components/sort";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Skeleton from "./components/Skeleton";

function App() {
  const category = useAppSelector((state) => state.categoriesSlice.category);
  const sort = useAppSelector((state) => state.sortSlice.sort);
  const {
    isError,
    isLoading,
    data: fetchedProducts,
  } = useGetProductQuery(`${category}?sort=${sort}`);
  const { products, cartQuantity } = useAppSelector(
    (state) => state.product.products
  );
  const { addProduct, removeProduct } = useActions();
  const addToFavorite = (item: IProduct) => {
    addProduct(item);
  };

  return (
    <>
      <Header />
      <div className="categories">
        <Categories />
        <Sort />
      </div>
      <div className="products">
        {fetchedProducts?.map((item) => (
          <div key={item.id} className="products__product">
            <span>
              <img className="image" src={item.image} alt={item.title} />
            </span>
            <div>
              <Link className="productlink" to={`/product/${item.id}`}>
                <a>{item.title}</a>
              </Link>
            </div>

            <button onClick={() => addToFavorite(item)}>ADD</button>

            <div className="price">{item.price}$</div>
          </div>
        ))}
      </div>
      {isLoading && (
        <div className="skeleton">
          {Array.from({ length: 10 }, (_, i) => (
            <div className="skeleton__product" key={i}>
              <Skeleton />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
