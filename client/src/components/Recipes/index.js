import React, { Component } from "react";
import API from "../../utils/API";
import { ImageUrls } from "react-router-dom";
import {RecipeList, RecipeListItem} from "./RecipeList/RecipeList";
import {RandomRecipeItem} from "./RandomRecipe"
import SearchBar from "./SearchBar";
import Container from "react-materialize/lib/Container";
import { Row, Col} from "react-materialize";


class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      surpriseRecipe:[]
    }
  };

  componentDidMount() {

    this.fetchRecipes()
    console.log("Recipes mounted");
    console.log('mount state ' + this.state.recipes)
  }

  fetchRecipes = searchTerm => {
    
    if (searchTerm) {
      API.searchRecipes(searchTerm).then(result => {
          console.log("Search result", result);
          console.log("recipe", result.data)
          this.setState({recipes:result.data});
          console.log(this.state.recipes)
      }).catch(err => {
          console.log("Search Error", err); 
      });
    }
  };

  randomizeRecipe = () => {
  
      API.randomRecipe().then(result => {
          console.log("Search result", result);
          console.log("recipe", result.recipes)
          this.setState({surpriseRecipe:result.recipes});
          console.log(this.state.surpriseRecipe)
      }).catch(err => {
          console.log("Search Error", err); 
      });
    
  };

  handleRecipeClick(recipeID) {

    console.log("you clicked " + recipeID);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar fetchRecipes={this.fetchRecipes} />
            {this.state.recipes.length ? (
              <Container>
              <RecipeList className = "border border-dark rounded m-3 p-2" recipes={this.state.recipes} handleClick={this.handleRecipeClick} />
              <RandomRecipeItem/>
              </Container>
              ) : (
              <h3> No Results to Display </h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipes;
