import React, { Component } from "react";
// import SearchBar from "../components/Recipes/SearchBar";
import Recipes from "../components/Recipes";
import WelcomeHeader from "../components/WelcomeHeader";
import Articles from "../components/Articles";
import Footer from "../components/GrubFooter";
import Container from "react-materialize/lib/Container";
import './style.css';

class NotLoggedIn extends Component {
 
  render() {
    return (
      <div className="notLoggedInPage">
        <Container>
          <div>
            <WelcomeHeader/>
            <Recipes/>
            <Articles />
            <Footer/>
          </div>
        </Container>
      </div>
    )
  };
};

export default NotLoggedIn;