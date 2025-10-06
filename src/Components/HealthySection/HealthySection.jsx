import React from "react";
import "./HealthySection.css";

const HealthySection = () => {
  return (
    <section className="healthy-section">
      {/* Left Image */}
      <div className="healthy-image">
        <img src="/images/farmer.jpg" alt="Farmer in field" />
      </div>

      {/* Right Content */}
      <div className="healthy-content">
        <p className="section-tag">What We Do</p>
        <h2 className="section-title">Healthy life with fresh products</h2>
        <p className="section-text">
          There are many variations of passages of Lorem Ipsum available, 
          but the majority have suffered alteration in some form, 
          by injected humour, or randomised words which don't look even.
        </p>

        <div className="stats">
          <div className="stat-item">
            <div className="circle">
              <span>90%</span>
            </div>
            <p>Eco Farms Worldwide</p>
          </div>
          <div className="stat-item">
            <div className="circle">
              <span>78%</span>
            </div>
            <p>Special Equipment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthySection;







// src/components/HealthySection.jsx
// import React from "react";
// import "./HealthySection.css";
// import farmerImg from "../../assets/farmer.jpg"; // replace with your image

// const HealthySection = () => {
//   return (
//     <section className="healthy-section">
//       {/* Left Side Image */}
//       <div className="healthy-left">
//         <img src={farmerImg} alt="Farmer in field" />
//       </div>

//       {/* Right Side Content */}
//       <div className="healthy-right">
//         <span className="tag">What We Do</span>

//         <h2>
//           Healthy life with <br /> fresh products
//         </h2>

//         <p>
//           There are many variations of passages of Lorem Ipsum available,
//           but the majority have suffered alteration in some form, by
//           injected humour, or randomised words which don't look even.
//         </p>

//         {/* Stats */}
//         <div className="stats">
//           <div className="stat">
//             <div className="circle">90%</div>
//             <p>
//               Eco Farms <br /> Worldwide
//             </p>
//           </div>
//           <div className="stat">
//             <div className="circle">78%</div>
//             <p>
//               Special <br /> Equipment
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HealthySection;
