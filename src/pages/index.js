import React, { useState } from "react";
import CounterComponent from "../templates/CounterComponent.js";
import "./index.css";

const IndexPage = () => {
  const [maxValue, setMaxValue] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);
  let hp = { type: "hp", maxValue: maxValue };
  let xp = { type: "xp" };

  const resetCounter = () => {
    setMaxValue(0);
    setIsConfirmed(false);
  };

  const initializeCouter = () => {
    setIsConfirmed(true);
  };

  const checkIfNumber = (event) => {
    /**
     * Allowing: Integers | Backspace | Tab | Delete | arrow keys
     **/

    const regex = new RegExp(
      /(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown)/
    );

    return !event.key.match(regex) && event.preventDefault();
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
            <label htmlFor="maxhp">MAX HP:</label>
            <input
              id="maxhp"
              name="maxhp"
              type="number"
              min="0"
              max="99"
              value={maxValue}
              onKeyDown={checkIfNumber}
              onChange={(e) => setMaxValue(e.target.value)}
            />
            <button
              className="confirm-button"
              onClick={() => initializeCouter()}
            >
              Confirm
            </button>
            <div>
              <p className="welcome-instructions">
                Input your character maximum Health Points or leave it blank to
                select it manually.
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
