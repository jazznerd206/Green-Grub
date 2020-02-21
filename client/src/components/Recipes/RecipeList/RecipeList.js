import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-materialize";
import "./style.css";
import RecipeListItem from "./RecipeListItem/RecipeListItem"

export function RecipeList ({recipes, handleClick, props}) {
  console.log("RecipeList recipes", recipes);
  return (
    <div className="recipe-list-container border border-dark rounded m-3 p-2">
      <ul>
        {recipes.map(recipe => (
          <RecipeListItem key={recipe.key} recipe={recipe} handleClick={handleClick} onSaveClick={props.onSaveClick} user={props.user} />
        ))}
      </ul>
    </div>
  );
}

