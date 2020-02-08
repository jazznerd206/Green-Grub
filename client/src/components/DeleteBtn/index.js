import React from "react";
import "./style.css";
import Recipe from "../../pages/Recipe";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;

