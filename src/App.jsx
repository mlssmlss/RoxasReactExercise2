import React, { Component, useEffect, useState } from "react";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

const App = () => {
  const [counters, setCounters] = useState([
    {
      id: 1,
      value: 3,
    },
    {
      id: 2,
      value: 5,
    },
    {
      id: 3,
      value: 7,
    },
  ]);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("counters change");
  }, [counters]);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleReset = () => {
    setCounters(
      counters.map((counter) => {
        return {
          ...counter,
          value: 0,
        };
      })
    );
  };

  const handleIncrement = (id) => {
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
          return {
            ...counter,
            value: counter.value - 1,
          };
        }
        return counter;
      })
    );
  };

  const getCountersWithValue = () => {
    return counters.filter((counter) => counter.value > 0).length;
  };

  return (
    <div>
      <NavBar totalCount={getCountersWithValue()} />
      <button
        onClick={() => setErrorMessage("new error")}
        className="btn btn-warning"
      >
        Add error
      </button>
      <div className="container">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
