import React, { Component } from "react";
// import SearchBar from "../components/Recipes/SearchBar";
import Container from "react-materialize/lib/Container";
import './style.css';
import API from "../utils/API";
import ArticlesList from "../components/ArticlesList";

class MyArticles extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      header: "My Articles",
      userId: props.user._id
    }
    this.handleDeleteArticle = this.handleDeleteArticle.bind(this);
  }


  componentDidMount() {
    // Call API
    API.myArticles(this.state.userId)
      .then(response => {
        const newState = { ...this.state };
        newState.articles = response.data;
        this.setState(newState);
      });
  }

  handleDeleteArticle(event) {
    event.preventDefault();
    const article = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
    const userId = this.state.userId;
    API.deleteArticle(article._id).then(response => {
      API.myArticles(userId)
        .then(response => {
          const newState = { ...this.state };
          newState.articles = response.data;
          this.setState(newState);
        });

    })
  }

  render() {
    return (
      <div className="footer-force">
        {this.state.articles ?
          <ArticlesList header={this.state.header} articles={this.state.articles} onSaveClick={this.handleDeleteArticle} user={this.props.user} buttonText="Delete" />
          : <h3>You didn't save any articles!</h3>
        }
      </div>
    )
  };
};

export default MyArticles;