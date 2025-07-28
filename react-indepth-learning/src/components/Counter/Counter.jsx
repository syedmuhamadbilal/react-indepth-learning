import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter !== 20) setCounter((prevState) => prevState + 1);
  };
  const decreaseValue = () => {
    if (counter !== 1) setCounter((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1> Small counter with usestate</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={decreaseValue}>Decrease Value</button>
    </div>
  );
};

export default Counter;
