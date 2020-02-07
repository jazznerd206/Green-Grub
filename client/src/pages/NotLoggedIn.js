import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import WelcomeHeader from "../components/WelcomeHeader";
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
            <SearchBar/>  
            <Footer/>
          </div>
        </Container>
      </div>
    )
  };
};

export default NotLoggedIn;