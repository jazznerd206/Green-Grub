import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";
import Items from "./components/StoreData"
import Nav from "./components/Layout/Navbar";
import NotLoggedIn from "./pages/NotLoggedIn";
import Login from "./components/auth/Login.js";
import Logout from "./components/auth/Logout.js"
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

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      items: []
    }
  }

  componentDidMount() {
    //console.log(window.localStorage);
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const storeState = store.getState();
    //console.log('store state ' + storeState.auth.user);
    const newState = this.state;
    newState.user = storeState.auth.user
    this.setState(newState);
    //console.log('react state ' + this.state.user.id);
  }


  render() {
    return (
      <div className="largeContainer">
        <Provider store={store} user={this.state.user}>
          <Router user={this.state.user}>
            <div className="App">
              <Nav className="navStyles" user={this.state.user} />
              <Route exact path="/" component={NotLoggedIn} user={this.state.user}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Switch>
                <PrivateRoute exact path="/LoggedIn" component={LoggedIn} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
