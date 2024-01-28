import React from "react";
import "./ExperienceBox.css";

function ExperienceBox({ image, name, description }) {
  return (
    <div className="experience-box-container">
      <img src={image} classname="experience-image"  alt="Banner" />
      <div className="experience-box-text">
        <p className="p6">{description}</p>
        <p className="p4">{name}</p>
      </div>
    </div>
  );
}

export default ExperienceBox;
