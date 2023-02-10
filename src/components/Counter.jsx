import React from "react";

const Counter = ({ counter, onIncrement, onDecrement }) => {
  const formatText = () => {
    if (counter.value > 0) {
      return counter.value;
    }
    return "Zero";
  };

  return (
    <>
      <div
        className="card mb-3 p-2"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 4px" }}
      >
        <img
          className="card-img-top img-fluid border"
          style={{
            objectFit: "contain",
            objectPosition: "center",
            width: "100%",
            maxHeight: 200,
          }}
          src={counter.src}
          alt={counter.name}
        />
        <div className="card-body">
          <h5 className="card-title">{counter.name}</h5>
          <p className="card-text">₱ {counter.price}</p>

          <p className="card-text">in stock: {counter.stock}</p>
          <div className="btn-group" role="group" hidden={counter.value <= 0}>
            <button
              onClick={() => onDecrement(counter.id)}
              className="btn btn-secondary "
              disabled={counter.value === 0}
            >
              -
            </button>
            <span
              className="btn btn-outline-secondary"
              style={{ pointerEvents: "none" }}
            >
              {formatText()}
            </span>
            <button
              onClick={() => onIncrement(counter.id)}
              className="btn btn-secondary"
            >
              +
            </button>
          </div>
          <button
            onClick={() => onIncrement(counter.id)}
            className="btn btn-primary mr-1"
            hidden={counter.value > 0}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
