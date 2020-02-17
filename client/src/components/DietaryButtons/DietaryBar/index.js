import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Col from 'react-materialize/lib/Col';

function DietaryBar(props) {

  return (
    <Container className="no-padding">
      <Row className="no-padding">
        {props.types.map(article => (
            <Button
              node="a"
              small
              waves="light"
              data-id={article}
              className="full-width"
              onClick={props.articleOnClick}

            >
              {article}
            </Button>
        ))}
      </Row>
    </Container>
  );
}

export default DietaryBar;