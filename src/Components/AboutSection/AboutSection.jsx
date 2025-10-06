import React from "react";
import "./AboutSection.css";
import aboutImg from "../../assets/abt.jpg"; // replace with your actual image
import { FaLeaf, FaTractor } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={aboutImg} alt="About farming" />
          {/* <div className="about-stats">
            <h2>*435+</h2>
            <p>Growth Tons' of Harvest</p>
          </div> */}
        </div>
<div className="about-stats">
            <h2>*435+</h2>
            <p>Growth Tons' of Harvest</p>
          </div>
        {/* Right Side - Content */}
        <div className="about-content">
          <button className="about-tag">Who We Are</button>
          <h1>
            Currently we are growing <br /> and selling organic food
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even.
          </p>

          <div className="about-features">
            <div className="feature">
              <FaLeaf className="feature-icon" />
              <div>
                <h3>Eco Farms Worldwide</h3>
                <p>
                  There are many variations of passages of lorem Ipsum available
                  majority have suffered.
                </p>
              </div>
            </div>
            <div className="feature">
              <FaTractor className="feature-icon" />
              <div>
                <h3>Special Equipment</h3>
                <p>
                  There are many variations of passages of lorem Ipsum available
                  majority have suffered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
