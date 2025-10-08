// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div className="logo-contact">
//           <div className="logo">
//             <img src="/logo.png" alt="grimo logo" />
//             <h2>grimo</h2>
//           </div>
//           <p className="tagline">
//             Mauris sed malesuada sem. Sed et vestibulum enim, non accumsan risus. Inter sapien intera est. Duis eu dui vel nam reseerat.
//           </p>
//           <div className="contact-info">
//             <p>📞 +1(234) 255 525</p>
//             <p>✉️ info@grimo.com</p>
//           </div>
//         </div>

//         <div className="footer-links">
//           <h3>Useful Link</h3>
//           <ul>
//             <li><a href="#">Company</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>

//         <div className="working-time">
//           <h3>Working Time</h3>
//           <ul>
//             <li>Mon - Fri: 9:00am - 5:00pm</li>
//             <li>Saturday: 10:00am - 1:00pm</li>
//             <li>Sunday: Closed</li>
//           </ul>
//         </div>

//         <div className="address">
//           <h3>Our Address</h3>
//           <p>Old Westbury, 256, New York</p>
//           <p>11201, United States</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <a href="#">Terms & Conditions</a> | 
//         <a href="#">Privacy Policy</a>
//         <p>© 2023 All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;












import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png"; // your logo
import wheatImg from "../../assets/wheat-right.png"; // wheat decoration (optional)
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // for the X social icon
import { MdCall, MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      {/* Top Yellow Bar */}
      <div className="footer-top">
        <ul>
          <li>Farmers</li>
          <li>Organic</li>
          <li>Foods</li>
          <li>Product</li>
        </ul>

        <div className="footer-contact">
          <div className="contact-item">
            <MdCall className="footer-icon" />
            <span>+1(212) 255-511</span>
          </div>
          <div className="contact-item">
            <MdOutlineEmail className="footer-icon" />
            <span>noreply@pbminfotech.com</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <h2>grimo</h2>
          </div>
          <p>
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan
            risus. In vitae sapien viverra est Duo ei ullum inani senserit.
          </p>
          <div className="social-icons">
            <div className="icon-circle"><FaFacebookF /></div>
            <div className="icon-circle"><RxCross2 /></div>
            <div className="icon-circle"><FaLinkedinIn /></div>
            <div className="icon-circle"><FaInstagram /></div>
          </div>
          <img src={wheatImg} alt="wheat" className="footer-decor" />
        </div>

        <div className="footer-right">
          <h3>
            Professional & modern, a theme designed to help your business stand
            out from the rest.
          </h3>
          <div className="footer-columns">
            <div>
              <h4>Useful Link</h4>
              <ul>
                <li>Company</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4>Working Time</h4>
              <ul>
                <li>Mon - Fri: 9.00am - 5.00pm</li>
                <li>Saturday: 10.00am - 6.00pm</li>
                <li>Sunday Closed</li>
              </ul>
            </div>

            <div>
              <h4>Our Address</h4>
              <ul>
                <li>Old Westbury 256, New York</li>
                <li>11201, United States</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>
          Copyright © 2024 <span>Agrimo</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
