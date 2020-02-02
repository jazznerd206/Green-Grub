import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import NotLoggedIn from "./pages/NotLoggedIn";
import "./App.css";
import Navbar from "./components/Navbar";
import Construction from "./components/Construction";

function App() {
  return (
    <Router>
      <Navbar />
      <Construction />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/notloggedin" component={NotLoggedIn} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;