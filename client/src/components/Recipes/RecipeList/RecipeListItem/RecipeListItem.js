import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-materialize";

export class RecipeListItem extends Component {
  render() {
    return (
      <Container className="border border-dark rounded m-3 p-2">
        <Row>
          <Col>
            <p>
              <input type="checkbox" onChange={this.markRecipeDone} />
            </p>
            <h4>{this.props.recipe.title}</h4>
            <h6>{this.props.recipe.imageUrls}</h6>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecipeListItem;
