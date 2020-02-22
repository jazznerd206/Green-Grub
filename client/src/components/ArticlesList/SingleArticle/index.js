import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-materialize';

function SingleArticle(props) {
  return (
    <Col s={4}>
      <Row>
        <Col>
          <h5>{props.article.title}</h5>
          <h6>{props.article.author}</h6>
        </Col>
        <Col xs={6}>
          <a target="_blank" rel={props.article.url} href={props.article.url}>
            <Button className="ml-1" variant="primary">View</Button>
          </a>
          {props.user
            ? <Button className="ml-1" variant="primary" data-object={JSON.stringify(props.article)} onClick={props.onSaveClick}>{props.buttonText}</Button>
            : ''
          }
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{props.article.description}</p>
        </Col>
      </Row>
      </Col>
  );
}

export default SingleArticle;
