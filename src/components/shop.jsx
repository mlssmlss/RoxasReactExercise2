import React from "react";
import { PRODUCTS_DATA } from "../products";

export const Shop = (props) => {
  const { id, title, price, image } = props.data;

  return (
    <div className="product">
      <img src={image} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <div className="itemPrice">
          <p> ${price}</p>
        </div>
      </div>
    </div>
  );
};
