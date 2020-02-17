import React, { Component } from "react";
import API from "../../utils/API";
import { ImageUrls } from "react-router-dom";
import {RecipeList, RecipeListItem} from "./RecipeList/RecipeList";
import {RandomRecipe} from "./RandomRecipe"
import SearchBar from "./SearchBar";
import Container from "react-materialize/lib/Container";
import { Row, Col, Modal} from "react-materialize";
import './style.css';


class Recipes extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      surpriseRecipe:{}
    }
  };

  componentDidMount() {

    this.fetchRecipes()
    console.log("Recipes mounted");
    console.log('mount state ' + this.state.recipes)
    this.randomizeRecipe()

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
  
      API.randomRecipe().then(response => {
          console.log("Random recipe:", response.data.title)
          this.setState({surpriseRecipe:response.data});
          console.log(this.state.surpriseRecipe)
      }).catch(err => {
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
            <SearchBar fetchRecipes={this.fetchRecipes} randomizeRecipe={this.randomizeRecipe} />
            
            {this.state.recipes.length ? (
              <Container>
              <RecipeList recipes={this.state.recipes} handleClick={this.handleRecipeClick} />
              </Container>
              ) : (
                <Container>
              <h3> No Results to Display </h3>

              
              </Container>
            )}
          </Col>


        </Row>
        {this.state.surpriseRecipe ? (
          <Container>
        <RandomRecipe style ='valign-wrapper' surpriseRecipe={this.state.surpriseRecipe} randomizeRecipe={this.randomizeRecipe}></RandomRecipe>
        </Container>
        ) : (
          <Container></Container>
        )
  }
        </Container>
    );
  
}
}

export default Recipes;
