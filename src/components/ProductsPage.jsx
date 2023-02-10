import React from "react";
import Counters from "./Counters";
import NavBar from "./NavBar";

const ProductsPage = ({
  onReset,
  counters,
  cart,
  onDecrement,
  onIncrement,
  onDelete,
}) => {
  const getCountersWithValue = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };
  return (
    <div className="bg-light">
      <NavBar
        totalCount={getCountersWithValue()}
        onReset={onReset}
        counters={counters}
        cart={cart}
      />
      <div className="container-fluid">
        <Counters
          counters={counters}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
