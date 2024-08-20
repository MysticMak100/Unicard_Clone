import React, { useState } from "react";
import img13 from "../assets/unicardimg1.png";

const Home = () => {
  const [isChecked, handleIsChecked] = useState(false);
  const [number, setNumber] = useState("");

  function handleChange(event) {
    handleIsChecked(event.target.checked);
  }

  function handleInput(event) {
    setNumber(event.target.value);
  }

  return (
    <>
      <div className="Wave">
        <div className="LeftWave">
          <h1 className="Maintext">
            {" "}
            <strong> NX Wave. </strong>
            The next-gen credit card for those who love rewards.
          </h1>

          <div className="Rev">
            <li> 1% Cashback</li>
            <li>5x RewardsZero</li>
            <li> Forex Markup </li>
          </div>

          <div className="Holder">
            <input
              type="text"
              placeholder="Enter your Number"
              value={number}
              onChange={handleInput}
              className="Apply"
            />
            <button className="ApplyButton" disabled={!isChecked}>
              Apply Now
            </button>
          </div>

          <div className="Terms">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
            <label htmlFor="new" className="Checklabel">
              {" "}
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application
            </label>
          </div>
        </div>

        <div>
          <img className="Unicard" src={img13} alt="img" />
        </div>
      </div>
    </>
  );
};

export default Home;
