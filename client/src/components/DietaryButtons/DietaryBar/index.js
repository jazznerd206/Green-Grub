import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Col from 'react-materialize/lib/Col';

function DietaryBar(props) {

  return (
    <Container className="no-padding">
      <Row className="no-padding">
        {props.types.map(dietType => (
            <Button key={dietType.id}
              node="a"
              small
              waves="light"
              className=""
              data-id={dietType}
              onClick={props.onClick}
            >
              {dietType}
            </Button>
        ))}
      </Row>
    </Container>
  );
}

export default DietaryBar;