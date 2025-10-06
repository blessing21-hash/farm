
// import Image from "../../assets/image.png";
// import Navbar from "../../Components/Navbar/Navbar";
// import Hero from "../../Components/Hero/Hero";
// import "./Home.css";

// export default function Home() {
//   return (
//     <div className="Home-page">
//       {/* Background */}
//       <div className="Home-background">
//         <Image
//           src="/Image.png"
//           alt="Farm background"
//           fill
//           className="home-bg-img"
//           priority
//         />
//       </div>

//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <Hero />
//     </div>
//   );
// }




// src/components/LandingPage/LandingPage.jsx
// import bgImage from "../../assets/Image.png";
// import Navbar from "../../Components/Navbar/Navbar";
// import Hero from "../../Components/Hero/Hero";

// export default function LandingPage() {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <img
//           src={bgImage}
//           alt="Farm background"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Overlay (optional for darker effect) */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Navbar & Hero */}
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }





import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import FeaturesSection from "../../Components/FeaturesSection/FeaturesSection";
import "./Home.css";
import ServicesSection from "../../Components/ServicesSection/ServicesSection";
import FieldSection from "../../Components/FieldSection/FieldSection";
import Testimonials from "../../Components/Testimonials/Testimonials";
import HealthySection from "../../Components/HealthySection/HealthySection";
import HistorySection from "../../Components/HistorySection/HistorySection";
import BlogSection from "../../Components/BlogSection/BlogSection";
import Footer from "../../Components/Footer/Footer";
import AboutSection from "../../Components/AboutSection/AboutSection";

export default function Home() {
  return (
    <div className="landing">
      { <div className="overlay"></div> }
      {/* <Navbar /> */}
      <Hero />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <FieldSection />
      <Testimonials />
      <HealthySection />
      <HistorySection />
      <BlogSection />
      <Footer />
    </div>
  );
}


