import React from "react";

import NavBar from "../components/NavBar";
import Counters from "../components/Counters";

const ProductsPage = ({
  onReset,
  products,
  cart,
  onDecrement,
  onIncrement,
  onDelete,
}) => {
  const getproductsWithValue = () => {
    return products.filter((product) => product.value > 0).length;
  };
  return (
    <div className="bg-light">
      <NavBar
        totalCount={getproductsWithValue()}
        onReset={onReset}
        products={products}
        cart={cart}
      />
      <div className="container-fluid">
        <Counters
          products={products}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
