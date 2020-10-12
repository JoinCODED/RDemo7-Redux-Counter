import React, { useState } from "react";

const Decrementer = () => {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    let newNumber = counter - 1;
    setCounter(newNumber);
  };

  return (
    <div className="col-lg-6">
      <div className="component">
        <p>DECREMENTER</p>
        <p>{counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={decrementCounter}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Decrementer;
