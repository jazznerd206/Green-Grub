import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./pages/Home"
import Nav from "./components/Layout/Navbar";
import NotLoggedIn from "./pages/NotLoggedIn";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import "./App.css";
//import Construction from "./components/Construction";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={NotLoggedIn} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;