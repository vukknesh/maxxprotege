import React from "react";
import "./SmilingFaceWithSunglasses.css";

function SmilingFaceWithSunglasses(props) {
  const { className } = props;

  return (
    <div className={`smiling-face-with-sunglasses-3 ${className || ""}`}>
      <div className="overlap-group">
        <img className="inner" src="/img/inner-1@2x.svg" />
        <img className="main" src="/img/main-1@2x.svg" />
        <img className="glasses" src="/img/glasses-1@2x.svg" />
      </div>
    </div>
  );
}

export default SmilingFaceWithSunglasses;
