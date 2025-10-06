import React from 'react';
import './FeaturesSection.css';


const features = [
  {
    icon: '👨‍🌾',
    title: 'Professional Farmers',
    description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.',
  },
  {
    icon: '🥕',
    title: 'Fresh Vegetables',
    description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.',
  },
  {
    icon: '📦',
    title: 'Agriculture Products',
    description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.',
  },
  {
    icon: '✅',
    title: '100% Guaranteed',
    description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="curve-background"></div>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <div className="text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;







// import React from "react";
// import "./FeaturesSection.css"; 

// const features = [
//   { icon: '👨‍🌾', title: 'Professional Farmers', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
//   { icon: '🥕', title: 'Fresh Vegetables', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
//   { icon: '📦', title: 'Agriculture Products', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
//   { icon: '✅', title: '100% Guaranteed', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
// ];

// export default function FeaturedSection() {
//   return (
//     <section className="features-section">
//       <div className="features-container">
//         {features.map((feature, index) => (
//           <div className="feature-card" key={index}>
//             <div className="icon">{feature.icon}</div>
//             <div className="text">
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import "./FeaturesSection.css";

// const features = [
//   { icon: '👨‍🌾', title: 'Professional Farmers', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
//   { icon: '🥕', title: 'Fresh Vegetables', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
//   { icon: '📦', title: 'Agriculture Products', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
//   { icon: '✅', title: '100% Guaranteed', description: 'Nullam porta enim vel tellus commodo, eget lacinia orci ultrices.' },
// ];

// export default function FeaturedSection() {
//   return (
//     <section className="features-section">
//       <div className="features-container">
//         {features.map((feature, index) => (
//           <div className="feature-card-curved" key={index}>
//             <div className="icon-circle">{feature.icon}</div>
//             <div className="text">
            
//               <h3>{feature.title}</h3>
//               <p>{feature.description}</p>
//             </div>
//             <div className="corner-circle">→</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
