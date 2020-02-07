import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import WelcomeHeader from "../components/WelcomeHeader";
import Articles from "../components/Articles";
import Footer from "../components/GrubFooter";
import Container from "react-materialize/lib/Container";

class NotLoggedIn extends Component {
 
  render() {
    return (
      <Container>
      <SearchBar/>
      <WelcomeHeader/>
      <Articles/>
      <Footer/>
      </Container>
    )
  };
};

export default NotLoggedIn;