import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-materialize';

function SingleArticle(props) {
  return (
    <Container className="border border-dark rounded m-3 p-2">
      <Row>
        <Col>
          <h4>{props.article.title}</h4>
          <h6>{props.article.author}</h6>
        </Col>
        <Col xs={2}>
          <a target="_blank" rel={props.article.url} href={props.article.url}>
            <Button className="ml-1" variant="primary">View</Button>
          </a>
          <Button className="ml-1" variant="primary" data-object={JSON.stringify(props.article)} onClick={props.onClick}>{props.buttonText}</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.article.description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SingleArticle;
