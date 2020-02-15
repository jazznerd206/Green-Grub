import React from "react";
import "./style.css";

function RandomBtn(props) {
  return (
    <span className="random-btn" {...props} role="button" tabIndex="0">
      Random Recipe
    </span>
  );
}

export default RandomBtn;