import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import WelcomeHeader from "../components/WelcomeHeader";
import Articles from "../components/Articles";
import Container from "react-materialize/lib/Container";
import './style.css';

class NotLoggedIn extends Component {
 
  render() {
    return (
        <Container className="notLoggedInPage mx-auto">
            <WelcomeHeader/>
            <SearchBar/>
            <Articles />
        </Container>
    )
  };
};

export default NotLoggedIn;