import React from 'react';
import { Container } from 'react-materialize';
import SingleArticle from './SingleArticle';
import "./style.css";

function ArticlesList(props) {
  return (
    <Container className="mt-5 articles-container">
      <h3>{props.header}</h3>
      {props.articles.map(article =>
        <SingleArticle article={article} buttonText={props.buttonText} onSaveClick={props.onSaveClick} />)}
    </Container>

  );
}
export default ArticlesList;