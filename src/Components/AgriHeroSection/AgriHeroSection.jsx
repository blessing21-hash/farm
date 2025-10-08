import React from "react";
import "./AgriHeroSection.css";
import bgImage from "../../assets/wheat-bg.png"; // replace with your background image
import icon from "../../assets/hand.png"; // replace with your svg icon

const AgriHeroSection = () => {
  return (
    <section
      className="agri-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="agri-hero-content">
        <div className="agri-icon-circle">
          <img src={icon} alt="icon" />
        </div>
        <h1>
          We’re popular leader in <br /> agriculture market globally
        </h1>
        <button className="discover-btn">
          Discover More <span>↗</span>
        </button>
      </div>
    </section>
  );
};

export default AgriHeroSection;
