import React, { useState } from "react";
import CounterComponent from "../templates/CounterComponent.js";
import "./index.css";

const IndexPage = () => {
  const [maxValue, setMaxValue] = useState();
  const [isConfirmed, setIsConfirmed] = useState(false);
  let hp = { type: "hp", maxValue: maxValue };
  let xp = { type: "xp" };

  const resetCounter = () => {
    setMaxValue();
    setIsConfirmed(false);
  };

  const initializeCouter = () => {
    setIsConfirmed(true);
  };
  return (
    <main>
      {isConfirmed && (
        <>
          <div className="counter-container">
            <CounterComponent maxValue={hp.maxValue} type={hp.type} />
            <CounterComponent type={xp.type} />
          </div>

          <div className="reset-container">
            <button onClick={() => resetCounter()}>Reset</button>
          </div>
        </>
      )}
      {!isConfirmed && (
        <>
          <div className="welcome-container">
            <input
              type="number"
              value={maxValue}
              onChange={(e) => setMaxValue(e.target.value)}
            />
            <button onClick={() => initializeCouter()}>Confirm</button>
            <div>
              <p className="welcome-instructions">
                Simply input your character max HP value in the input box above
                and confirm your choice.
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
