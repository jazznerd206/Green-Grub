import "./style.css";
import RecipeListItem from "./RecipeListItem/RecipeListItem";
import React, { Component } from "react";
import Container from "react-materialize/lib/Container";

 class RecipeList extends Component {


  
  // getStyle = () => {
  //   return {
  //     textDecoration: this.props.recipe.done ? "line-through" : "none"
  //   };
  // };

  // markRecipeDone = event => {
  //   console.log(this.props.markRecipeDone);
  // };

  render(){
    return( 
      
      <Container className="mt-5 recipes-container">
        {this.props.recipes.map((recipe) => 
        <RecipeListItem key={recipe.id} recipe={recipe}>
        </RecipeListItem>)}
        </Container>
    );
  }
}

export default RecipeList;
