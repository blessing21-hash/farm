import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Martin Bailey",
    role: "SUPERVISOR",
    img: "/images/martin.jpg",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
  },
  {
    id: 2,
    name: "Emma Greed",
    role: "CUSTOMER",
    img: "/images/emma.jpg",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
  },
  {
    id: 3,
    name: "Daniel Craig",
    role: "CO FOUNDER",
    img: "/images/daniel.jpg",
    text: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <p className="section-tag">Testimonial</p>
      <h2 className="section-title">What our customers say</h2>

      <div className="testimonial-container">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            {/* Quotation Icon */}
            <div className="quote-icon">❝</div>

            {/* Rating */}
            <div className="stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < t.rating ? "star filled" : "star"}>
                  ★
                </span>
              ))}
            </div>

            {/* Text */}
            <p className="testimonial-text">“{t.text}”</p>

            {/* Profile */}
            <div className="profile">
              <img src={t.img} alt={t.name} className="profile-img" />
              <div>
                <h4 className="profile-name">{t.name}</h4>
                <p className="profile-role">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="testimonial-nav">
        <button className="nav-btn">‹</button>
        <button className="nav-btn">›</button>
      </div>
    </section>
  );
};

export default Testimonials;










