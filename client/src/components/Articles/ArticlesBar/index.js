import React from 'react';
import { Button, Container, Row } from 'react-materialize';
import Col from 'react-materialize/lib/Col';
import './style.css';

function ArticlesBar(props) {
  let colSize = 12 / props.articles.length;
  return (
    <Container className="no-padding">
      <Row className="no-padding">
        {props.articles.map(article => (
          <Col key={article.id} s={colSize} className="no-padding">
            <Button
              node="a"
              small
              waves="light"
              data-id={article.id}
              className="full-width"
            >
              {article.title}
  </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ArticlesBar;