import React, { Component } from "react";
import API from "../../utils/API";
import { ImageUrls } from "react-router-dom";
//import SaveBtn from "../SaveBtn";
//import DeleteBtn from "../components/DeleteBtn/";
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
          console.log(this.state.recipes)
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

//   searchRecipes = () => {
//     let recipeName = this.state.recipeName;
//     const apiKey = "?apiKey=" + process.env.REACT_APP_API_KEY;
//     let url =
//       `https://api.spoonacular.com/recipes/search?query=${recipeName}` + apiKey;
//     //?apiKey=YOUR-API-KEY
//     console.log(apiKey);
//     axios
//       .get(url)
//       .then(res => {
//         console.log(res);
//         this.displayRes(res.data);
//       })
//       .catch(err => console.log(err));
//   };
//   saveRecipe = recipe => {
//     API.saveRecipe(recipe)
//       .then(res => {
//         console.log(res);
//         console.log("recipe saved");
//       })
//       .catch(err => console.log(err));
//   };
//   randomRecipe = recipe => {
//     API.randomRecipe(recipe)
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => console.log(err));
//   };
