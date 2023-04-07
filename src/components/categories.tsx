import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/redux";
import { categoriesActions } from "../Store/fakestore/categoriesSlice";
import { useGetCategoriesQuery } from "../Store/fakestore/fakestore.api";

function categories() {
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e: any) => {
    if (!dropdownRef.current!.contains(e.target)) {
      setShowCategory(false);
    }
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const [currCategory, setCurrCategory] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const category = useAppSelector((state) => state.categoriesSlice.category);
  const {
    isError: isError2,
    isLoading: isloading2,
    data: categories,
  } = useGetCategoriesQuery("");

  const handleCategory = (cat: string) => {
    if (cat == "") {
      setCurrCategory(cat);
      dispatch(categoriesActions.setCategory(""));
    } else {
      setCurrCategory(cat);
      dispatch(categoriesActions.setCategory(`category/${cat}`));
    }
  };

  return (
    <div>
      <button onClick={() => setShowCategory(!showCategory)}>Categories</button>
      {showCategory && (
        <div className="category" ref={dropdownRef}>
          <ul>
            <li
              className={category === "" ? "active" : ""}
              onClick={() => handleCategory("")}
            >
              all
            </li>
            {categories?.map((cat) => (
              <li
                className={currCategory === cat ? "active" : ""}
                key={cat}
                onClick={() => handleCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default categories;
