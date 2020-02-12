import React, { Component } from "react";
import axios from "axios";
import API from "../utils/API";


class Recipe extends Component {
  state = {
    recipeName: "",
    recipes: []
  };

  displayRes = data => {
    this.setState({ recipes: data.items });
  };

  searchRecipes = () => {
    API.recipeSearch(this.state.recipeName);
  };
}

export default Recipe;
