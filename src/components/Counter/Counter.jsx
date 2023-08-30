import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounterFunction() {
    setCounter(counter + 1);
    console.log("Increment clicked");
  }
  function decrementCounterFunction() {
    setCounter(counter - 1);
    console.log("Decrement clicked");
    }

  return (
    <div className="counter">
      <span className="count">{counter}</span>
      <div>
        <button className="counter-btn" onClick={incrementCounterFunction}>
          +1
        </button>
        <button className="counter-btn" onClick={decrementCounterFunction}>
            -1
        </button>
      </div>
    </div>
  );
};

export default Counter;
