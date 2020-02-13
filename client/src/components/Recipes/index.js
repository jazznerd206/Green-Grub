import React, { Component } from "react";
import API from "../../utils/API";
import { ImageUrls } from "react-router-dom";
import RecipeList from "./RecipeList/RecipeList";
import SearchBar from "./SearchBar";
import Container from "react-materialize/lib/Container";
import { Row, Col} from "react-materialize";
import RecipeListItem from "./RecipeList/RecipeListItem/RecipeListItem";

class Recipes extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    console.log("Recipes mounted");
  }

  fetchRecipes = searchTerm => {
    
    if (searchTerm) {
      API.searchRecipes(searchTerm).then(result => {
          console.log("Search result", result);
          this.setState({recipes:result});
      }).catch(err => {
          console.log("Search Error", err); 
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar fetchRecipes={this.fetchRecipes} />
            {this.state.recipes.length ? (
              <div>
              <RecipeList/>
              <RecipeListItem/>
              </div>

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
