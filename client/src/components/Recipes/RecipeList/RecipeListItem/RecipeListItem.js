import React from "react";
import { Container, Row, Col, Button } from "react-materialize";
import "./style.css";

function RecipeListItem(props) {
  return (
    <Container className="recipe-container">
      <div className = "recipe-title">
      <Row>
        <Col>
          <h4>{props.recipe.title}</h4>
        </Col>
      </Row>
      <Row>
        <Col>Servings: {props.recipe.servings}</Col>
        <Col>Time in minutes: {props.recipe.readyInMinutes}</Col>
        <Col className="ml-auto">
      
          <Button data-object={JSON.stringify(props.recipe)} onClick={props.onSaveClick}>Save</Button>

        </Col>
      </Row>
      </div>
    
      <Row>
        <Col>
          <img src={props.recipe.image} className="recipe-image"/>
        </Col>
        <Col>
        <div className="instructions-div">
          <h5>Instructions:</h5>
          <span>{props.recipe.instructions}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeListItem;
