import React from 'react';
import { Row, Col } from 'react-materialize';
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
    <Row className="mt-5 articles-container">
      {props.articles.map(article =>
        <SingleArticle article={article} buttonText={props.buttonText} onSaveClick={props.onSaveClick} user={props.user}/>)}
    </Row>
    </div>

  );
}
export default ArticlesList;