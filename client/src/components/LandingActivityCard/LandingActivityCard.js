import { TriangleRight } from "lucide-react";
import React from "react";
import "./LandingActivityCard.css";

function LandingActivityCard({
  image,
  title,
  target,
  date,
  location,
  description,
  publisher,
}) {
  return (
    <div className="landing-activity-card-container">
      <div className="landing-activity-card-content-container">
        <img src={image} className="image-landing-activity-card" />
        <p className="p4" style={{ color: "#71825E", fontWeight: 700 }}>
          {" "}
          {title.length > 40 ? `${title.substring(0,40)}...` : title}
        </p>

        <div className="landing-activity-card-text-2">
          <p className="p6">
            Target: <span className="p6">{target}</span>
          </p>
          <p className="p6">{date}</p>
          <p className="p6">{location}</p>
        </div>

        <div className="landing-activity-card-text-2">
          <p className="p7">
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </p>
        </div>

        <div className="landing-activity-card-text-2">
          <p className="p6">
            Diunggah Oleh: <span className="p6">{publisher}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingActivityCard;
