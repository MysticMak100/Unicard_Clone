import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Features from "./components/Features";
import img1 from "./assets/one_percent_cashback.png";
import img2 from "./assets/five_x_rewards.png";
import img3 from "./assets/forex_globe.png";
import img8 from "./assets/app_screen_1.webp";
import img9 from "./assets/app_screen_2.webp";
import img12 from "./assets/pcidss_cert.svg";

import CardComponent from "./components/CardComponent";
import Partners from "./components/Partners";
import Download from "./components/Download";
function App() {
  const text1 = `<h1 class="FeatHighlight" > <strong class="FeatureText">1% assured cashback on your spends.</strong>The more you spend, the more you earn.</h1>
<p class="FeatureSubtext">Not applicable on fuel purchase, utility bills, rent & wallet transfers, ATM withdrawals & international transactions. </p>`;

  const text2 = `<h1 class="FeatHighlight" > <strong class="FeatureText">5x more value than your cashback, </strong>only at the Uni Store.</h1>`;

  const text3 = `<h1 class="FeatHighlight" > <strong class="FeatureText">Zero Forex Markup.</strong>Go international, without any fees.</h1>`;

  const text4 = `<h1 class="MainTitle">We've all heard of instant groceries, now say hello to
instant credit.</h1> 
<p class="Subtitle"> 0% hassle, 100% paperless. Get your
Uni Card instantly.</p>
`;

  const text5 = `<h1 class="MainTitle">With Uni,<br/>
you’re always in control.</h1>
            <p class="Subtitle">Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.</p>`;

  const [number, setNumber] = useState("");

  function handleInput(event) {
    setNumber(event.target.value);
  }

  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const firstElementHeight = document.querySelector(".Dual").offsetHeight;

    if (scrollY > firstElementHeight / 1.55) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isChecked, handleIsChecked] = useState(false);

  function handleChange(event) {
    handleIsChecked(event.target.checked);
  }

  return (
    <>
      <div className="Dual">
        <Navbar />
        <Home />
      </div>

      <Hero />
      <Features htmlContent={text1} img={img1} order={"normal"} type={"app"} />
      <Features htmlContent={text2} img={img2} order={"reverse"} type={"app"} />
      <Features htmlContent={text3} img={img3} order={"normal"} type={"app"} />

      <div className="Free">
        <h1>
          Lifetime <span className="Emphasize">free</span> No joining fee.
        </h1>
        <h1>No annual charges.</h1>
      </div>

      <div className="Screenshot">
        <Features htmlContent={text4} img={img8} order={"normal"} type={"ss"} />
        <Features htmlContent={text5} img={img9} order={"normal"} type={"ss"} />
      </div>

      <div className="Cards">
        <CardComponent cardType={"card1"} />
        <CardComponent cardType={"card2"} />
        <CardComponent cardType={"card3"} />
      </div>

      <Partners />

      <div className="Discontinue">
        <p>Please note that to stay compliant with RBI guidelines, we have</p>
        <p>discontinued Pay 1/3rd and Pay 1/2 cards for the time being.</p>
      </div>

      <Download />

      <div className="Standard">
        <p>Uni maintains the highest level of security standards</p>
        <img src={img12} alt="" />
      </div>

      {showFooter && (
        <footer className={`footer ${showFooter ? "show" : ""}`}>
          <div className="Foot">
            <input
              type="text"
              placeholder="Enter your Number"
              onChange={handleInput}
              value={number}
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
        </footer>
      )}
    </>
  );
}

export default App;
