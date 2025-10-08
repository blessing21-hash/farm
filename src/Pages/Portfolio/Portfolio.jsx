import React from "react";
import Footer from "../../Components/Footer/Footer";
import Port from "../../Components/Port/Port";
import "./Portfolio.css";
import PortCards from "../../Components/PortCards/PortCards";



const Portfolio = () => {
  return (
    <div className="portfolio-page">
       { <div className="overlay"></div> }
      <Port />
      <PortCards />
      <Footer />
    </div>
  );
};

export default Portfolio;