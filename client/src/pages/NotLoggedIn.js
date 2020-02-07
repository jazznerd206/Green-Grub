import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import WelcomeHeader from "../components/WelcomeHeader";
import Articles from "../components/Articles";
import Footer from "../components/GrubFooter";
import Container from "react-materialize/lib/Container";
import './style.css';

class NotLoggedIn extends Component {
 
  render() {
    return (
<<<<<<< HEAD
      <div className="notLoggedInPage">
        <Container>
          <div>
            <WelcomeHeader/>
            <SearchBar/>  
            <Footer/>
          </div>
        </Container>
      </div>
=======
      <Container>
      <SearchBar/>
      <WelcomeHeader/>
      <Articles/>
      <Footer/>
      </Container>
>>>>>>> c0d45b740b441af106d0fcc337648eec767d0a96
    )
  };
};

export default NotLoggedIn;