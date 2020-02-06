import React, { Component } from "react";
import axios from "axios";


class Recipe extends Component {
  state = {
    recipeName: "",
    recipes: []
  };

  displayRes = data => {
    this.setState({ recipes: data.items });
  };

  searchRecipes = () => {
    let url = `https://api.spoonacular.com/recipes/search?query=${
      this.state.recipeName
    }`;
    axios
      .get(url)
      .then(res => {
        //console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };
}
