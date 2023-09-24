import React, { useState } from "react";
import { CounterButton } from "./CounterButton"
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounterParentFunction(by) {
    setCounter(counter + by);
  }
  function decrementCounterParentFunction(by) {
    setCounter(counter - by);
  }

  return (
    <>
      <div className="mt-15"></div>
      <CounterButton incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <CounterButton by={2} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <CounterButton by={5} incrementMethod={incrementCounterParentFunction} decrementMethod={decrementCounterParentFunction}/>
      <span className="total-count">{counter}</span>
      <br/> 
      <button className="reset-btn" onClick={() => setCounter(0)}>Reset Counter</button>

    </>
  );
}