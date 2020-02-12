import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
//import Home from "./pages/Home"
import Nav from "./components/Layout/Navbar";
import NotLoggedIn from "./pages/NotLoggedIn";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import PrivateRoute from "./components/private-route/PrivateRoute";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import RecipeList from "./components/Recipes/RecipeListItem/RecipeList";
import SaveBtn from "./components/Recipes/SaveBtn";
import DeleteBtn from "./components/Recipes/DeleteBtn";
import Recipes from "./components/Recipes"
import "./App.css";
import Recipe from "./components/Recipes";
//import Construction from "./components/Construction";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends Component {
  render() {
    return (
      <div className="largeContainer">
        <Provider store={store}>
          <Router>
            <div className="App">
              <Nav className="navStyles"/>
              <Route exact path="/" component={NotLoggedIn} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/LoggedIn" component={LoggedIn} />
              </Switch>
              <Footer/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
