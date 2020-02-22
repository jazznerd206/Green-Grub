import React, { Component } from "react";
// import SearchBar from "../components/Recipes/SearchBar";
import Container from "react-materialize/lib/Container";
import './style.css';
import API from "../utils/API";
import RecipeList from "../../src/components/Recipes/RecipeList/RecipeList";
import RecipeListItem from "../../src/components/Recipes/RecipeList/RecipeListItem/RecipeListItem";

class MyRecipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      header: "My Recipes",
      userId: props.user._id
    }
    this.handleDeleteRecipe = this.handleDeleteRecipe.bind(this);
  }


  componentDidMount() {

    API.myRecipes(this.state.userId)
      .then(response => {
        const newState = { ...this.state };
        newState.recipes = response.data;
        this.setState(newState);
      });
      console.log(this.state.userId)
  }

  handleDeleteRecipe(event) {
    event.preventDefault();
    const recipe = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
    const userId = this.state.userId;
    API.deleteRecipe(recipe._id).then(response => {
      API.myRecipes(userId)
        .then(response => {
          const newState = { ...this.state };
          newState.recipes = response.data;
          this.setState(newState);
        });

    })
  }

  render() {
    return (
      <div className="footer-force">
        {this.state.recipes ?
          <RecipeList header={this.state.header} recipes={this.state.recipes} onSaveClick={this.handleDeleteRecipe} user={this.props.user} buttonText="Delete" />
          : <h3>No saved recipes</h3>
        }
      </div>
    )
  };
};

export default MyRecipes;