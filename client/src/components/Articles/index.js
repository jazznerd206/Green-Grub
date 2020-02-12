import React, { Component } from "react";
import Container from 'react-materialize/lib/Container';
import ArticlesBar from './ArticlesBar';
import ArticlesList from "../ArticlesList";
import API from "../../utils/API";

class Articles extends Component {
  state = {
    keywords: ["Keto Diet", "Vegan Diet", "Vegetarian Diet", "Low-Fat Diet", "Gluten-Free Diet"],
    articles: [],
    header: "Click a topic"
  };

  handleArticleButtonClick = event => {
    event.preventDefault();
    const id = event.target.attributes.getNamedItem("data-id").value;
    API.getArticle(id).then(res => {
      const newState = { ...this.state };
      console.log(newState);
      newState.articles = res.data;
      newState.header=id;
      this.setState(newState);
    });
  }

  handleSaveArticle = event => {
    event.preventDefault();
    const article = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
    API.saveArticle(article).then(res => alert("Article Saved!"));
  }

  render() {
    return (
      <Container>
        <ArticlesBar articleOnClick={this.handleArticleButtonClick} articles={this.state.keywords} />
         <ArticlesList header={this.state.header} articles={this.state.articles} onSaveClick={this.handleSaveArticle} buttonText="Save"/> 
      </Container >
    );
  }
}
export default Articles;