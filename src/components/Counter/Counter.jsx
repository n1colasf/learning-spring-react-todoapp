import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function incrementCounterParentFunction(by) {
    setCounter(counter + by);
  }

  return (
    <>
      <div className="mt-15"></div>
      <CounterButton />
      <CounterButton by={2} />
      <CounterButton by={5} />
      <span className="total-count">{counter}</span>

    </>
  );
}
// create a Counter component
function CounterButton ({ by }) {
  // create a state variable called "counter" and initialize it to zero
  const [counter, setCounter] = useState(0);

  // create a function to increment the counter
  function incrementCounterFunction() {
    setCounter(counter + by);
  }

  // create a function to decrement the counter
  function decrementCounterFunction() {
    setCounter(counter - by);
  }

  // render the Counter component
  return (
    <div className="counter">
      <div>
        <button className="counter-btn" onClick={incrementCounterFunction}>
          +{by}
        </button>
        <button className="counter-btn" onClick={decrementCounterFunction}>
          -{by}
        </button>
      </div>
    </div>
  );
};
CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 1,
};

// export the Counter component
export { CounterButton };
