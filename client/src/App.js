import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotLoggedIn from "./pages/NotLoggedIn";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={NotLoggedIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;