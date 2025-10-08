import React from "react";
import "./ImageRow.css";

import img1 from "../../assets/farm1.png";
import img2 from "../../assets/farm2.png";
import img3 from "../../assets/farm3.png";
import img4 from "../../assets/farm4.png";
import img5 from "../../assets/farm5.png";
import img6 from "../../assets/farm6.png";

const ImageRow = () => {
  return (
    <div className="image-row">
      <img src={img1} alt="Farm 1" />
      <img src={img2} alt="Farm 2" />
      <img src={img3} alt="Farm 3" />
      <img src={img4} alt="Farm 4" />
      <img src={img5} alt="Farm 5" />
      <img src={img6} alt="Farm 6" />
    </div>
  );
};

export default ImageRow;
