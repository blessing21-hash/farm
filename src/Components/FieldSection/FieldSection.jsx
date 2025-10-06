import React from "react";
import "./FieldSection.css";

// Feature data
const features = [
  {
    icon: "/icons/Vector.png", // use exact icons you have
    title: "Agriculture Products",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
  },
  {
    icon: "/icons/Vector1.png",
    title: "Quality Products",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
  },
  {
    icon: "/icons/Vector2.png",
    title: "Fresh Vegetables",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
  },
  {
    icon: "/icons/Vector3.png",
    title: "Pure & Organic",
    description: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.",
  },
];

export default function FieldSection() {
  return (
    <section className="field-section">
      {/* Top badge */}
      <div className="badge">🌱 Grow Naturally</div>

      {/* Title */}
      <h2 className="field-title">
        Choose What's Perfect <br /> For Your Field
      </h2>

      <div className="field-content">
        {/* Left side features */}
        <div className="features left">
          {features.slice(0, 2).map((feature, i) => (
            <div className="feature-item" key={i}>
              <div className="icon-circle">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center corn image */}
        <div className="field-image">
          <img src="/images/corn.png" alt="Corn" />
        </div>

        {/* Right side features */}
        <div className="features right">
          {features.slice(2).map((feature, i) => (
            <div className="feature-item" key={i}>
              <div className="icon-circle">
                <img src={feature.icon} alt={feature.title} />
              </div>
              <div className="text">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
