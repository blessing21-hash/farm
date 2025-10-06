import React from "react";
import "./AboutServices.css";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.jpg";

const about = [
  {
    id: 1,
    img: about1,
    ctegory: "Fertilizer",
    title: "Harvest Concepts",
  },
  {
    id: 2,
    img: about2,
    ctegory: "Fruits",
    title: "Farming Products",
  },
  {
    id: 3,
    img: about3,
    ctegory: "Fertilizer",
    title: "Soil fertilization",
  },
  {
    id: 4,
    img: about4,
    ctegory: "Fruits",
    title: "Fresh vegetables",
  },
];

const AboutServices = () => {
  return (
    <section className="aboutservices">
      <div className="about-header">
        <button className="tg-btn">Who We Are</button>
        <h2>Best Agriculture Services</h2>
      </div>

      <div className="about-grid">
        {about.map((about) => (
          <div className="about-card" key={about.id}>
            {/* Image */}
            <div className="about-img">
              <img src={about.img} alt={about.title} />
              <span className="arrow-btn">
                <FaArrowUpRightFromSquare />
              </span>
            </div>

            {/* Category */}
            <p className="ctegory">
              <span className="dot"></span> {about.ctegory}
            </p>

            {/* Title */}
            <h3>{about.title}</h3>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      <div className="about-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default AboutServices;
