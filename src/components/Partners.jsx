import React from "react";
import img10 from "../assets/sbmlogo.jpg";
import img11 from "../assets/yes-bank.svg";

const Partners = () => {
  return (
    <>
      <div className="PartnerParent">
        <div className="PartnerContainer">
          <div className="Ptext">
            <h1>
              At Uni, we’re committed to delivering an unmatched credit
              experience for millions of Indians.
            </h1>
            <p>
              On this mission, we’ve partnered with some of the best in the
              business.
            </p>
          </div>

          <div className="Partner">
            <img src={img10} alt="sbm" className="img10" />
            <img src={img11} alt="yes-bank" className="img11" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
