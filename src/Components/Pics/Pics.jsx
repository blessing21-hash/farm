import React from "react";
import "./Pics.css";

import pic1 from "../../assets/img1.jpg";
import pic2 from "../../assets/img2.jpg";
import pic3 from "../../assets/img3.jpg";
import pic4 from "../../assets/img4.jpg";


const Pic = () => {
  return (
    <div className="pic-row">
      <img src={pic1} alt="img 1" />
      <img src={pic2} alt="img 2" />
      <img src={pic3} alt="img 3" />
      <img src={pic4} alt="img 4" />
      
    </div>
  );
};

export default Pic;
