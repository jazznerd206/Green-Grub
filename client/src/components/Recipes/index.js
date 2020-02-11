import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { ImageUrls } from "react-router-dom";
//import SaveBtn from "../SaveBtn";
//import DeleteBtn from "../components/DeleteBtn/";
import { RecipeListItem } from "../../../src/components/Recipes/RecipeListItem/RecipeList";
import SearchBar from "./SearchBar";
import Container from "react-materialize/lib/Container";
import { Row, Col} from "react-materialize";

class Recipes extends Component {
  state = {
    recipeName: "",
    recipes: []
  };

  componentDidMount() {
    console.log("mounted");
  }

  fetchRecipes = event => {
    event.preventDefault();
    if (this.state.recipeName) {
      const recipe = this.state.recipeName.trim();
      console.log(process.env.RECIPE_APP_API_KEY)
      //API.searchRecipes(recipe)
      axios.get("https://api.spoonacular.com/recipes/search?q=" + this.state.recipeName + "&apiKey=" + process.env.RECIPE_APP_API_KEY)
        .then(res => {
          console.log(process.env.RECIPE_APP_API_KEY)
          console.log(res)
          console.log(res.results)

          this.setState({
            results: res.results
          });
        })
        .catch(err => console.log(err));
    }
    console.log(this.state.results);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar />
            {this.state.results.length > 0 ? (
              <Container>
                {this.state.results.map(recipe => (
                  <RecipeListItem
                    key={recipe.id}
                    recipe={recipe.title}
                    markRecipeDone={this.markRecipeDone}
                  >
                    <h1>{recipe.results.title}</h1>
                    <img src={recipe.results.imageUrls}></img>
                    />
                    <Col></Col>
                  </RecipeListItem>
                ))}
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
