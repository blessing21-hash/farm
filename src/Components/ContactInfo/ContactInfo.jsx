// import React from "react";
// import "./ContactInfo.css";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

// const ContactInfo = () => {
//   return (
//     <section className="contact-info">
//       <div className="info-card">
//         <div className="info-header">
//           <div className="icon-circle">
//             <FaEnvelope className="icon" />
//           </div>
//           <h3>Mail us 24/7</h3>
//         </div>
//         <hr />
//         <p>pbminfo@admin.com</p>
//         <p>pbmadmin@info.com</p>
//         <div className="arrow-circle">
//           <FaArrowRight className="arrow" />
//         </div>
//       </div>

//       <div className="info-card">
//         <div className="info-header">
//           <div className="icon-circle">
//             <FaPhone className="icon" />
//           </div>
//           <h3>Call us 24/7</h3>
//         </div>
//         <hr />
//         <p>Phone : (+55) 654 - 545 - 5418</p>
//         <p>Mobile : (+01) 654 - 545 - 1235</p>
//         <div className="arrow-circle">
//           <FaArrowRight className="arrow" />
//         </div>
//       </div>

//       <div className="info-card">
//         <div className="info-header">
//           <div className="icon-circle">
//             <FaMapMarkerAlt className="icon" />
//           </div>
//           <h3>Our Locations</h3>
//         </div>
//         <hr />
//         <p>4821 Ride Top, Anch St, Alaska</p>
//         <p>997998, USA main city.</p>
//         <div className="arrow-circle">
//           <FaArrowRight className="arrow" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;






// import React from "react";
// import MailIcon from "../../assets/mailbox.svg"
// import "./ContactInfo.css";

// const ContactInfo = () => {
//   return (
//     <section className="contact-info">
//       {/* Card 1 */}
//       <div className="info-card">
//         <div className="info-header">
//           <div className="icon-circle">
//             {/* 👇 Replace this SVG with your own */}
//             <img src= {MailIcon} alt="Mail Icon" className="custom-icon" />
//           </div>
//           <h3>Mail us 24/7</h3>
//         </div>
//         <hr />
//         <p>pbminfo@admin.com</p>
//         <p>pbmadmin@info.com</p>
//         <div className="arrow-circle">
//           {/* Replace this too if you want your own arrow SVG */}
//           <img src="/assets/arrow.svg" alt="Arrow Icon" className="arrow-icon" />
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div className="info-card">
//         <div className="info-header">
//           <div className="icon-circle">
//             <img src="/assets/call.svg" alt="Phone Icon" className="custom-icon" />
//           </div>
//           <h3>Call us 24/7</h3>
//         </div>
//         <hr />
//         <p>Phone : (+55) 654 - 545 - 5418</p>
//         <p>Mobile : (+01) 654 - 545 - 1235</p>
//         <div className="arrow-circle">
//           <img src="/assets/arrow.svg" alt="Arrow Icon" className="arrow-icon" />
//         </div>
//       </div>

//       {/* Card 3 */}
//       <div className="info-card">
//         <div className="info-header">
//           <div className="icon-circle">
//             <img src="/assets/location.svg" alt="Location Icon" className="custom-icon" />
//           </div>
//           <h3>Our Locations</h3>
//         </div>
//         <hr />
//         <p>4821 Ride Top, Anch St, Alaska</p>
//         <p>997998, USA main city.</p>
//         <div className="arrow-circle">
//           <img src="/assets/arrow.svg" alt="Arrow Icon" className="arrow-icon" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;











import React from "react";
import "./ContactInfo.css";

// Import your SVG icons
import MailIcon from "../../assets/mailbox.png";
import PhoneIcon from "../../assets/call.png";
import LocationIcon from "../../assets/location.png";
import ArrowIcon from "../../assets/arrow.png";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      {/* Card 1 */}
      <div className="info-card">
        <div className="info-header">
          <div className="icon-circle">
            <img src={MailIcon} alt="Mail Icon" className="custom-icon" />
          </div>
          <h3>Mail us 24/7</h3>
        </div>
        <hr />
        <p>pbminfo@admin.com</p>
        <p>pbmadmin@info.com</p>
        <div className="arrow-circle">
          <img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="info-card">
        <div className="info-header">
          <div className="icon-circle">
            <img src={PhoneIcon} alt="Phone Icon" className="custom-icon" />
          </div>
          <h3>Call us 24/7</h3>
        </div>
        <hr />
        <p>Phone : (+55) 654 - 545 - 5418</p>
        <p>Mobile : (+01) 654 - 545 - 1235</p>
        <div className="arrow-circle">
          <img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="info-card">
        <div className="info-header">
          <div className="icon-circle">
            <img src={LocationIcon} alt="Location Icon" className="custom-icon" />
          </div>
          <h3>Our Locations</h3>
        </div>
        <hr />
        <p>4821 Ride Top, Anch St, Alaska</p>
        <p>997998, USA main city.</p>
        <div className="arrow-circle">
          <img src={ArrowIcon} alt="Arrow Icon" className="arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
