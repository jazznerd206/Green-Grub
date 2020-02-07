import React, { Component } from "react";
import Container from 'react-materialize/lib/Container';
import ArticlesBar from './ArticlesBar';

class Articles extends Component {
  state = {
    articles: [{ title: "Article 1", id: "id1" },
    { title: "Article 2", id: "id2" }]
  };


  render() {
    return (
      <Container>
        <ArticlesBar articles={this.state.articles} />
      </Container >

    );
  }
}
export default Articles;