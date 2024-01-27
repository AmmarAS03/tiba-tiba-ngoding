import React from "react";
import "./LandingCardBox.css";

function LandingCardBox({ image, title, description }) {
  const newTitle = title.split(" ");

  return (
    <div className="card-box">
      <img src={image} className="image-card-box" />
      <div className="title-container-card-box">
        <p className="h5">{newTitle[0]}</p>
        <p className="h5" style={{ color: "#71825E", marginLeft: "5px" }}>
          {newTitle[1]}
        </p>
      </div>
      <p className="p6">{description}</p>
    </div>
  );
}

export default LandingCardBox;
