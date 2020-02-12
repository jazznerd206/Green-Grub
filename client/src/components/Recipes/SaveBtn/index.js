import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      Save Recipe
    </span>
  );
}

{/* <SaveBtn
key={recipe.id}
onClick={() =>
  this.saveRecipe({
    title: recipe.results.title,
    ImageUrls: recipe.results.ImageUrls[0]
  })
}
>
Save Recipe

</SaveBtn> */}

export default SaveBtn;