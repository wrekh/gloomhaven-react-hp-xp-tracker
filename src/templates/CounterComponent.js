import React, { useState } from "react";

const CounterComponent = (props) => {
  const [value, setValue] = useState(props.maxValue || 0);
  const [change, setChange] = useState();

  const timeoutIdReference = React.useRef();

  const setChangeTimeout = () => {
    clearTimeout(timeoutIdReference.current);
    timeoutIdReference.current = setTimeout(() => {
      setChange(null);
    }, 5000);
  };

  const updateChange = (x) => {
    setChange(x);
    setChangeTimeout();
  };
  const canIcrement = () => {
    if (!props.maxValue || value < props.maxValue) {
      return true;
    }
  };

  const increment = () => {
    if (canIcrement()) {
      setValue(value + 1);
      if (typeof change === "number") {
        updateChange(change + 1);
      } else {
        updateChange(1);
      }
    }
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
      if (typeof change === "number") {
        updateChange(change - 1);
      } else {
        updateChange(-1);
      }
    }
  };

  return (
    <>
      <div className={"counter-wrap counter__" + props.type}>
        <div className={"counter-buttons buttons__" + props.type}>
          <button
            className="counter-increment"
            onClick={() => increment(value)}
          >
            <span>+</span>
          </button>
          <button
            className="counter-decrement"
            onClick={() => decrement(value)}
          >
            <span>-</span>
          </button>
        </div>
        <div className={"display-wrap display__" + props.type}>
          <div className="change">{change > 0 ? "+" + change : change}</div>
          <div className="value">{value}</div>
          <div className="name">{props.type.toUpperCase()}</div>
        </div>
      </div>
    </>
  );
};
export default CounterComponent;
