import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import NotLoggedIn from "./pages/NotLoggedIn";
import "./App.css";
import Nav from "./components/Navbar";
import Construction from "./components/Construction";

function App() {
  return (
    <Router>
      <Nav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/notloggedin" component={NotLoggedIn} />
          </Switch>
        </div>
      <Construction />
    </Router>
  );
}

export default App;