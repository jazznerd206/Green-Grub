import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-materialize";


export function RandomRecipe ({surpriseRecipe}) {
    console.log("RandomRecipeItem recipe", surpriseRecipe);
    return (
        <Container>
        <p className="random-recipe-item" key={surpriseRecipe.id} surpriseRecipe={surpriseRecipe}> {surpriseRecipe.title}</p>
        <img src={surpriseRecipe.image}></img>
        <p className="random-recipe-instructions"> {surpriseRecipe.instructions}</p>
        </Container>
    )
  }