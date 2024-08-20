import React, { useEffect, useState } from "react";
import "../components/Transition.css";
import img14 from "../assets/arrow.png";

const TextTransition = () => {
  const [showText, setShowText] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showText) {
      const timer = setTimeout(() => {
        setImageVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showText]);

  return (
    <div className="text-container">
      <div className={`text-content ${showText ? "reveal-text" : ""}`}>
        <p>
          <strong> Earn 1% assured cashback </strong> on your spends. Get{" "}
          <strong> 5X</strong>
        </p>
        <p>
          <strong>more value than cashback </strong>at the Uni Store. Enjoy
        </p>
        <p>
          round the clock <strong> Whatsapp support </strong>. And it's
        </p>
        <p>
          <strong> lifetime free </strong>; no joining fee, no annual charges.
        </p>
      </div>

      <img
        src={img14}
        alt="Sample"
        className={`fade-in-image ${imageVisible ? "visible" : ""}`}
      />
    </div>
  );
};

export default TextTransition;
