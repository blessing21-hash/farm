// src/components/AboutKnows.jsx
import React from "react";
import "./AboutKnows.css";
import aboutImg from "../../assets/aboutknow.jpg"; // replace with your actual image
import { FaRegCommentDots } from "react-icons/fa"; // for yellow chat icon (optional)

const AboutKnows = () => {
  return (
    <section className="aboutknows">
      <div className="aboutknows-container">
        
        {/* Left content */}
        <div className="aboutknows-left">
          <span className="aboutknows-tag">Get To Know Us</span>
          <h2 className="aboutknows-title">
            Agriculture matters to the <br /> future of development
          </h2>
          {/* <p className="aboutknows-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don’t look even.
          </p> */}

          <div className="aboutknows-img-wrapper">
            <img src={aboutImg} alt="Farmers" className="aboutknows-img" />
            <div className="aboutknows-icon">
              <FaRegCommentDots size={24} />
            </div>
          </div>
        </div>

        {/* Right content - Steps */}
        <div className="aboutknows-right">
            <p className="aboutknows-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected humour,
            or randomised words which don’t look even.
          </p>

          <div className="step active">
            <div className="step-number">01</div>
            <div className="step-content">
              <h4>Schedule Your Experience</h4>
              <p>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h4>Get Professional Advice</h4>
              <p>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h4>Meet Our Expert Farmer</h4>
              <p>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h4>Now Get A Best Products</h4>
              <p>Quisqu Tell Us Risus Adpis Viera Bibe Um Urna.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutKnows;
