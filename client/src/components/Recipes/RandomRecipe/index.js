import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Card, Icon, CardTitle } from "react-materialize";
import "./style.css";

export function RandomRecipe ({surpriseRecipe}) {
    console.log("RandomRecipeItem recipe", surpriseRecipe);

    return (
        <Row className = "valign-wrapper">
  <Col 
    m={12}
    s={6}
  >
    <Card className = "random-container"
      actions={[
        <a key="1" href={surpriseRecipe.sourceUrl}><Button>View</Button></a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={surpriseRecipe.image}><p className="random-recipe-item" key={surpriseRecipe.id} surpriseRecipe={surpriseRecipe}></p></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
         {surpriseRecipe.title}
         
    </Card>
    
  </Col>
</Row>
    )
    }
