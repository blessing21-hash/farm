


import React from "react";
import Footer from "../../Components/Footer/Footer";
import ServicesHero from "../../Components/ServicesHero/ServicesHero";
import "./Services.css";
import ServicesCards from "../../Components/ServicesCards/ServicesCards";


const Services = () => {
  return (
    <div className="services-page">
       { <div className="overlay"></div> }
        <ServicesHero />
        <ServicesCards />
      <Footer />
    </div>
  );
};

export default Services;