import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-materialize";
import "./style.css";


export function RecipeList ({recipes, handleClick}) {
  console.log("RecipeList recipes", recipes);
  return (
    <div className="container">
      <ul>
        {recipes.map(recipe => (
          <RecipeListItem key={recipe.key} recipe={recipe} handleClick={handleClick} />
        ))}
      </ul>
    </div>
  );
}

export function RecipeListItem ({recipe, handleClick}) {
  console.log("RecipeListItem recipe", recipe);

  return (
  <li className="recipe-item" key={recipe.key} onClick={() => handleClick(recipe.key)}>{recipe.recipe}</li>
  )
}

