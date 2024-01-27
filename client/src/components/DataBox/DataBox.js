import React from "react";
import "./DataBox.css";
import "../../assets/css/typography.css";

function DataBox({ image, number, title }) {
  return (
    <div className="background-card">
      <img src={image} className="image-card" alt="DataBox" />
      <div className="text-card">
        <p className="h3" style={{color:'#71825E'}}>{number}</p>
        <p className="p4" style={{color:'#71825E'}}>{title}</p>
      </div>
    </div>
  );
}

export default DataBox;
