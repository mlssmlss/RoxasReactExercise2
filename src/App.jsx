import React, { useState } from "react";
import { products_data } from "./products";
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

function App() {
  const [counters, setCounters] = useState(products_data);
  const [cart, setCart] = useState([]);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleIncrement = (id) => {
    handleAddCart(id);
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          return {
            ...counter,
            value: counter.value + 1,
          };
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          if (counter.value === 1) {
            handleRemoveCart(counter.id);
          }
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      })
    );
  };

  const handleAddCart = (id) => {
    if (cart.find((item) => item.id === id)) {
    } else {
      let newCartItem = {
        id: id,
      };

      setCart([...cart, newCartItem]);
    }
  };

  const handleRemoveCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getCountersWithValue = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };

  return (
    <>
      <div className="bg-light">
        <NavBar totalCount={getCountersWithValue()} />
        <div className="container-fluid">
          <Counters
            counters={counters}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
      </div>
    </>
  );
}

export default App;
