import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import WelcomeHeader from "../components/WelcomeHeader";
import Footer from "../components/GrubFooter";
import Container from "react-materialize/lib/Container";

class NotLoggedIn extends Component {
 
  render() {
    return (
      <Container>
      <div style={{backgroundColor:"White"}}>
        <SearchBar/>
        <WelcomeHeader/>
        <Footer/>
      </div>

      </Container>
    )
  };
};

export default NotLoggedIn;