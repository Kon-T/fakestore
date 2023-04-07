import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { sortSlice } from "../Store/fakestore/sortSlice";

function sort() {
  const dispatch = useDispatch();
  const { sort } = useAppSelector((state) => state.sortSlice);
  const sortList = ["asc", "desc"];
  const [popup, setPopup] = useState(false);
  return (
    <div className="sort">
      Сортировка{" "}
      <span className="sort--sortlabel" onClick={() => setPopup(!popup)}>
        {sort}
      </span>
      {popup && (
        <div className="popup">
          <ul>
            {sortList.map((i: string) => (
              <li
                key={i}
                className={sort == i ? "active" : ""}
                onClick={() => dispatch(sortSlice.actions.setSort(i))}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default sort;
