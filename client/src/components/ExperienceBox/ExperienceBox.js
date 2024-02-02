import React from "react";
import "./ExperienceBox.css";

function ExperienceBox({ image, name, description }) {
  return (
    <div className="experience-box-container">
      <div className="experience-box-text">
        <img src={image} className="theImage" />
        
      </div>
      <div className="experience-description">
        <p className="p6" style={{ color: "rgb(71, 71, 71)" }}>
          {description}
        </p>
        <p className="p6">{name}</p>
      </div>
    </div>
  );
}

export default ExperienceBox;
