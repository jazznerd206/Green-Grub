import React, { Component } from "react";
import API from "../../utils/API";
import {RecipeList, RecipeListItem} from "./RecipeList/RecipeList";
import {RandomRecipe} from "./RandomRecipe"
import SearchBar from "./SearchBar";
import Container from "react-materialize/lib/Container";
import { Row, Col, Modal } from "react-materialize";
import "./style.css";

class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      surpriseRecipe: null,

    };

  }

  componentDidMount() {
    // this.fetchRecipes();
    // console.log("Recipes mounted");
    // console.log("mount state " + this.state.recipes);
    // this.randomizeRecipe();
  }

  fetchRecipes = searchTerm => {
    if (searchTerm) {
      API.searchRecipes(searchTerm).then(result => {
          this.setState({recipes:result.data});
          console.log(this.state.recipes)
      }).catch(err => {
          console.log("Search Error", err); 
      });
    }
  };


  handleSaveRecipe = event => {
    event.preventDefault();
    const recipe = JSON.parse(event.target.attributes.getNamedItem("data-object").value);
    recipe.userId = this.props.user._id;
    API.saveRecipe(recipe).then(res => alert("Recipe Saved!"));
  }

  
  randomizeRecipe = () => {
    
    API.randomRecipe()
      .then(response => {
        console.log("Random recipe:", response.data.title);
        this.setState({
          surpriseRecipe: response.data
        });
        console.log(this.state.surpriseRecipe);
      })
      .catch(err => {
        console.log("Search Error:", err);
      });
  };

  handleRecipeClick(recipeID) {
    console.log("you clicked " + recipeID);
  }

  render() {
    return (
      <Container className="container">
        <Row>
          <Col>
            <SearchBar
              handleSurpriseClick={this.handleSurpriseClick}
              fetchRecipes={this.fetchRecipes}
              randomizeRecipe={this.randomizeRecipe}
              surpriseClick={this.state.surpriseClick}
            />{" "}
            {this.state.surpriseRecipe ? (
              <RandomRecipe
                style="valign-wrapper"
                handleSurpriseClick={this.handleSurpriseClick}
                surpriseRecipe={this.state.surpriseRecipe}
                randomizeRecipe={this.randomizeRecipe}
              />
            ) :(
              <Container>no results </Container>)
            }{" "}
            </Col>
            </Row>
            <Row>
            <Col>
            {this.state.recipes.length ? (
              <Container>
                <RecipeList
                  recipes={this.state.recipes}
                  handleClick={this.handleRecipeClick}
                />{" "}
              </Container>
            ) : (
              <Container>
                <h3> No Results to Display </h3>
              </Container>
            )}{" "}
          </Col>
        </Row>
        {/* {this.state.surpriseRecipe ? (
                  <Container>
                <RandomRecipe style ='valign-wrapper' surpriseClick = {this.state.surpriseClick} surpriseRecipe={this.state.surpriseRecipe} randomizeRecipe={this.randomizeRecipe}></RandomRecipe>
                </Container>
                ) : (
                  <Container>lkjlkj</Container>
                )
          } */}{" "}
      </Container>
    );
  }
}

export default Recipes;
