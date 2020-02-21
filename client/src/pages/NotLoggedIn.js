import React, { Component } from "react";
import Recipes from "../components/Recipes";
import GrubHeader from "../components/GrubHeader";
import Articles from "../components/Articles";
import Container from "react-materialize/lib/Container";
import './style.css';


class NotLoggedIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props
    }
  }


  componentDidMount() {
    //console.log('mounted');
    console.log('not logged in state ' + JSON.stringify(this.state));
  }
 
  render() {
    return (
      <div className="notLoggedInPage">
        <GrubHeader className="header-container"/>
        <Container className="mx-auto center-align">
            <Recipes className="recipes-container"/>
            <Articles className="articles-container" user={this.props.user}/>  
        </Container>
      </div>
    )
  };
};

export default NotLoggedIn;