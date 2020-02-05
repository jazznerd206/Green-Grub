import React, { Component } from "react";
import axios from "axios";
import { TextInput, Icon, Row, Col,Button } from 'react-materialize';


class Recipe extends Component {
  state = {
    searchRes: [],
    query: "",
    recipes: []
  };

  displayRes = data => {
    this.setState({ recipes: data.items });
  };

  searchRecipes = () => {
    let url = `https://api.spoonacular.com/recipes/search?q=${
      this.state.query
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
