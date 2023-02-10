import React from "react";
import Counter from "./Counter";
const Counters = ({ onIncrement, onDecrement, onDelete, counters }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {counters.map((counter) => (
            <div className="col-xs-12 col-md-6 col-xl-3">
              <Counter
                key={counter.id}
                onDelete={onDelete}
                counter={counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counters;
