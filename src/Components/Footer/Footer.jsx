import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="logo-contact">
          <div className="logo">
            <img src="/logo.png" alt="grimo logo" />
            <h2>grimo</h2>
          </div>
          <p className="tagline">
            Mauris sed malesuada sem. Sed et vestibulum enim, non accumsan risus. Inter sapien intera est. Duis eu dui vel nam reseerat.
          </p>
          <div className="contact-info">
            <p>📞 +1(234) 255 525</p>
            <p>✉️ info@grimo.com</p>
          </div>
        </div>

        <div className="footer-links">
          <h3>Useful Link</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="working-time">
          <h3>Working Time</h3>
          <ul>
            <li>Mon - Fri: 9:00am - 5:00pm</li>
            <li>Saturday: 10:00am - 1:00pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="address">
          <h3>Our Address</h3>
          <p>Old Westbury, 256, New York</p>
          <p>11201, United States</p>
        </div>
      </div>

      <div className="footer-bottom">
        <a href="#">Terms & Conditions</a> | 
        <a href="#">Privacy Policy</a>
        <p>© 2023 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;