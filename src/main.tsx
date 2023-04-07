import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

import { store } from "./Store/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/product/:id" element={<ProductPage />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
