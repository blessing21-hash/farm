import React from "react";
import "./PortCards.css";

import img1 from "../../assets/port1.jpg";
import img2 from "../../assets/port2.jpg";
import img3 from "../../assets/port3.jpg";
import img4 from "../../assets/port4.jpg";
import img5 from "../../assets/port5.jpg";
import img6 from "../../assets/port6.jpg";
import img7 from "../../assets/port7.jpg";
import img8 from "../../assets/port8.jpg";

const PortCards = () => {
  return (
    <div className="port-cards">
      <img src={img1} alt="Port 1" />
      <img src={img2} alt="Port 2" />
      <img src={img3} alt="Port 3" />
      <img src={img4} alt="Port 4" />
      <img src={img5} alt="Port 5" />
      <img src={img6} alt="Port 6" />
      <img src={img7} alt="Port 7" />
      <img src={img8} alt="Port 8" />
    </div>
  );
};

export default PortCards;
