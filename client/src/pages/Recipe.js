import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";
import { ImageUrls } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { Col, Row } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn"
import {RecipeList, RecipeListItem} from "../components/RecipeList/RecipeList";
//import { Input, FormBtn } from "../components/Form";
import SearchBar from "../components/SearchBar";

class Recipe extends Component {
  state = {
    recipeName: "",
    recipes: []
  };

  componentDidMount() {
    console.log("mounted");
  }

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log("", this.state.recipeName);
  };

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
      <div>
        {this.state.recipes && this.state.recipes.length > 0 ? (
          <div>
            <RecipeList>
              {this.state.recipes.map(recipe => (
                <RecipeListItem key={recipe.id}>
                <img src={recipe.results.imageUrls}></img>
                <h1>
                    {recipe.results.title}
                </h1>
                  />
                  <SaveBtn
                    key={recipe.id}
                    onClick={() =>
                      this.saveRecipe({
                        title: recipe.results.title,
                        ImageUrls: recipe.results.ImageUrls[0]
                      })
                    }
                  >
                    Save Recipe
                  
                  </SaveBtn>
                  <DeleteBtn onClick={() => this.deleteRecipe(recipe._id)} />
                </RecipeListItem>
              ))}
            
            </RecipeList>
          
          </div>
        ) : (
          <h3> No Results to Display </h3>
        )}
      
      </div>
    );
  }
}

export default Recipe;
