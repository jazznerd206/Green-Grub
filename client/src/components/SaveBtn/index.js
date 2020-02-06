import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      Save Recipe
    </span>
  );
}

export default SaveBtn;