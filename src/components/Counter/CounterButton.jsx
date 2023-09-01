import React from "react";
import { PropTypes } from "prop-types";

function CounterButton ({ by, incrementMethod, decrementMethod }) {  
    // render the Counter component
    return (
      <div className="counter">
        <div>
          <button className="counter-btn" onClick={() => incrementMethod(by)}>
            +{by}
          </button>
          <button className="counter-btn" onClick={() => decrementMethod(by)}>
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
  