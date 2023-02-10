import React from "react";

import App from "../App";

export const Products = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS_DATA.map((product) => (
          <App data={product} />
        ))}
      </div>
    </div>
  );
};
