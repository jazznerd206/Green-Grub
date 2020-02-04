import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import WelcomeHeader from "../components/WelcomeHeader";
import Container from "react-materialize/lib/Container";

class NotLoggedIn extends Component {
 
  render() {
    return (
      <Container>
      <div style={{backgroundColor:"White"}}>
        <SearchBar/>
        <WelcomeHeader/>
      </div>

      </Container>
    )
  };
};

export default NotLoggedIn;