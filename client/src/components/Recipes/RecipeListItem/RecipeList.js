import "./style.css";


import React, { Component } from 'react'

export class RecipeListItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.recipe.done ?
      'line-through' : 'none'
    }
  }

  markRecipeDone = (e) => {
    console.log(this.props.markRecipeDone)
  }

  render() {
    return (
      <div style = {this.getStyle()}>
        <p><input type='checkbox' onChange = {this.markRecipeDone}/></p>
       <li className="list-group-item">{this.props.recipe}</li>;
      </div>
    )
  }
}

export default RecipeListItem


