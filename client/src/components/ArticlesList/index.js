import React from 'react';
import { Container, Row, Col } from 'react-materialize';
import SingleArticle from './SingleArticle';
import "./style.css";

function ArticlesList(props) {
  return (
    <div>
    <Row>
      <Col>
        <h3>{props.header}</h3>
      </Col>
    </Row>
    <Container className="mt-5 articles-container">
      {props.articles.map(article =>
        <SingleArticle className = "single-article-container" article={article} buttonText={props.buttonText} onSaveClick={props.onSaveClick} user={props.user}/>)}
    </Container>
    </div>


  );
}
export default ArticlesList;