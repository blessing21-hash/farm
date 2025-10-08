import React from "react";
import "./ContactSection.css";
import contactImg from "../../assets/contact.jpg"; // your left-side image
// import bgSketch from "../../assets/farm-bg.png"; // faint sketch background

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-image">
        <img src={contactImg} alt="Farmer with strawberries" />
      </div>

      <div
        // className="contact-form-area"
        // style={{ backgroundImage: `url(${bgSketch})` }}
      >
        <div className="contact-header">
          <button className="contact-badge">🌿 Get To Contact Us</button>
          <h2>
            Have a any Questions?
            <br /> Get in Touch!
          </h2>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
          </div>

          <textarea placeholder="Message"></textarea>

          <button type="submit" className="send-btn">
            Send Message <span className="arrow">↗</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
