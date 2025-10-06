// // components/LandingPage/Hero.tsx
// import "./Hero.css";

// export default function Hero() {
//   return (
//     <div className="hero">
//       <button className="tagline">Believe in Quality!</button>

//       <h1 className="hero-title">
//         Quality Trust: <br /> Direct to the Farm
//       </h1>

//       <p className="hero-text">
//         We all need a little space to grow. Give yourself the space you need to
//         find your inner you.
//       </p>

//       <button className="hero-btn">Contact Us ✈</button>
//     </div>
//   );
// }





// src/components/LandingPage/Hero.jsx
// export default function Hero() {
//   return (
//     <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 md:px-24 text-white">
//       <button className="px-4 py-2 border border-white rounded-full text-xs uppercase tracking-wide mb-4 hover:bg-white hover:text-black transition">
//         Believe in Quality!
//       </button>

//       <h1
//         className="mb-4"
//         style={{
//           fontFamily: "Signika, sans-serif",
//           fontWeight: 500,
//           fontSize: "100px",
//           lineHeight: "100px",
//         }}
//       >
//         Quality Trust: <br /> Direct to the Farm
//       </h1>

//       <p className="text-lg max-w-xl mb-6">
//         We all need a little space to grow. Give yourself the space you need
//         to find your inner you.
//       </p>

//       <button className="bg-white text-black rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition">
//         Contact Us ✈
//       </button>
//     </div>
//   );
// }






import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <button className="quality-btn">Believe in Quality!</button>

      <h1 className="hero-title">
        Quality Trust: <br /> Direct to the Farm
      </h1>

      <p className="hero-text">
        We all need a little space to grow. Give yourself the space you need to
        find your inner you.
      </p>

      <button className="hero-btn">Contact Us </button>
    </div>

  );
}
