import React from "react";
import { Container, Row, Col, Button } from "react-materialize";
import "./style.css";

function RecipeListItem(props) {
  return (
    <Container className="recipe-container">
      <Row>
        <Col>
          <h4>{props.recipe.title}</h4>
        </Col>
      </Row>
      <Row>
        <Col>Servings: {props.recipe.servings}</Col>
        <Col>Time in minutes: {props.recipe.readyInMinutes}</Col>
        <Col className="ml-auto">
        {props.user
          ? <Button onClick={props.onSaveClick}>Save</Button>
        : ''
          }
        </Col>
      </Row>
    
      <Row>
        <Col s={3}>
          <img src={props.recipe.image} className="recipe-image"/>
        </Col>
        <Col s={9}>
          <h5>Instructions:</h5>
          <span>{props.recipe.instructions}</span>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeListItem;
