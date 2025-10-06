


import React from "react";
import Footer from "../../Components/Footer/Footer";
import AboutHero from "../../Components/AboutHero/AboutHero"
import "./About.css";
import AboutSection from "../../Components/AboutSection/AboutSection";
import AboutServices from "../../Components/AboutServices/AboutServices";
import AboutKnows from "../../Components/AboutKnows/AboutKnows";
import HistorySection from "../../Components/HistorySection/HistorySection";
import Testimonials from "../../Components/Testimonials/Testimonials";

const About = () => {
  return (
    <div className="about-page">
       { <div className="overlay"></div> }
        <AboutHero />
        <AboutSection />
        <AboutServices />
        <AboutKnows />
        <HistorySection />
        <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
