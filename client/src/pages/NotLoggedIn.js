import React, { Component } from "react";
import SearchBar from "../components/SarchBar";
import Container from "react-materialize/lib/Container";

class NotLoggedIn extends Component {
 
  render() {
    return (
      <Container>
      <div style={{backgroundColor:"White"}}>
        <SearchBar/>
      </div>
      </Container>
    )
  };
};

export default NotLoggedIn;