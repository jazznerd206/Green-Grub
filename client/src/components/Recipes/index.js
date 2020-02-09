import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import { ImageUrls } from "react-router-dom";
//import SaveBtn from "../SaveBtn";
//import { Col, Row } from "../components/Grid";
//import DeleteBtn from "../components/DeleteBtn/";
import {RecipeListItem} from "../../../src/components/Recipes/RecipeListItem/RecipeList";
//import { Input, FormBtn } from "../components/Form";
import SearchBar from "./SearchBar";
import Container from 'react-materialize/lib/Container';
import { Row, Col} from 'react-materialize';

class Recipes extends Component {
  state = {
    recipeName: "",
    recipes: []
  };

  componentDidMount() {
    console.log("mounted");
  }


  displayRes = data => {
    this.setState({
      recipes: data.items
    });
  };

  searchRecipes = () => {
    let recipeName = this.state.recipeName;
    const apiKey = "?apiKey=" + process.env.REACT_APP_API_KEY;
    let url =
      `https://api.spoonacular.com/recipes/search?query=${recipeName}` + apiKey;
    //?apiKey=YOUR-API-KEY
    console.log(apiKey);
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };
  saveRecipe = recipe => {
    API.saveRecipe(recipe)
      .then(res => {
        console.log(res);
        console.log("recipe saved");
      })
      .catch(err => console.log(err));
  };
  randomRecipe = recipe => {
    API.randomRecipe(recipe)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container>
        {this.state.recipes.length > 0 ? (
          <div>
              {this.state.recipes.map(recipe => (
                <RecipeListItem key={recipe.id} recipe={recipe} markRecipeDone= {this.markRecipeDone}>
                <img src={recipe.results.imageUrls}></img>
                <h1>
                    {recipe.results.title}
                </h1>
                  />
                  <Col>
                  </Col>

                </RecipeListItem>
              ))}
          </div>
        ) : (
          <h3> No Results to Display </h3>
        )}
      
      </Container>
    );
  }
}

export default Recipes;