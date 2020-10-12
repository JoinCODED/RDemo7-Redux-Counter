import React, { useState } from "react";

const Incrementer = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    let newNumber = counter + 1;
    setCounter(newNumber);
  };

  return (
    <div className="col-lg-6">
      <div className="component">
        <p>INCREMENTER</p>
        <p>{counter}</p>
        <button
          className="btn btn-lg btn-outline-dark"
          onClick={incrementCounter}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Incrementer;
