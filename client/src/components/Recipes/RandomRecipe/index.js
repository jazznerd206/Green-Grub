import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Card, Icon, CardTitle } from "react-materialize";
import "./style.css";

export function RandomRecipe ({surpriseRecipe}) {
const trigger = <Button className = 'modal-button'>Open Random Recipe</Button>;

    console.log("RandomRecipeItem recipe", surpriseRecipe);

    return (
        <Row className = "valign-wrapper">
  <Col 
    m={12}
    s={6}
  >

    <Modal className="modal" header={surpriseRecipe.title} trigger={trigger}>
    <a key="1" href={surpriseRecipe.sourceUrl}><CardTitle className="random-image" image ={surpriseRecipe.image}><p className="random-recipe-item" key={surpriseRecipe.id} surpriseRecipe={surpriseRecipe}></p></CardTitle></a>  
      
    </Modal>
    
  </Col>
</Row>
    )
}
