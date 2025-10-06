import React from "react";

import "./ServicesSection.css";

const services = [
  {
    category: "FERTILIZER",
    title: "Harvest Concepts",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: "/images/service1.png",
  },
  {
    category: "FRUITS",
    title: "Farming Products",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: "/images/service2.png",
  },
  {
    category: "FERTILIZER",
    title: "Soil Fertilization",
    description:
      "Farming and animal husbandry and discuss with farmers and scientists.",
    image: "/images/service3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      {/* Header row: left side title, right side nav buttons */}
      <div className="services-header">
        <div className="title-group">
          <span className="tag">Our Services</span>
          <h2>Best Agriculture Services</h2>
        </div>

        <div className="nav-buttons">
          <button className="nav-btn">‹</button>
          <button className="nav-btn">›</button>
        </div>
      </div>

      {/* Cards */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="card-content">
              <span className="category"> <span>•</span> {service.category}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <div className="corner-circle">➔</div>
          </div>
        ))}
      </div>
    </section>
  );
}
