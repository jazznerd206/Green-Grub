import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-materialize";


export function RandomRecipeItem ({recipe}) {
    console.log("RandomRecipeItem recipe", recipe);
    return (
        <p className="recipe-item" key={recipe.id}> {recipe.recipe}</p>
    )
  }