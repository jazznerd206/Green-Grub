import React from 'react';
import { Container, Image, Row, Col, Button } from 'react-materialize';
import "./style.css"

function SingleArticle(props) {
  return (

    <Container className="border border-dark rounded m-3 p-2 single-article-container">

      <Row>
        <Col>
          <h5>{props.article.title}</h5>
          <h6>{props.article.author}</h6>
        </Col>
        <Col xs={6}>
          <a target="_blank" rel={props.article.url} href={props.article.url}>
            <Button className="ml-1 view-button" variant="primary">View</Button>
          </a>
          {props.user
            ? <Button className="ml-1 save-button" variant="primary" data-object={JSON.stringify(props.article)} onClick={props.onSaveClick}>{props.buttonText}</Button>
            : ''
          }
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
