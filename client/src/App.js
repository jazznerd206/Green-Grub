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
import GrubFooter from "./components/GrubFooter"
import NotLoggedIn from "./pages/NotLoggedIn";
import Login from "./components/auth/Login.js";
import Logout from "./components/auth/Logout.js"
import Register from "./components/auth/Register.js";
import PrivateRoute from "./components/private-route/PrivateRoute";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import API from "./utils/API";
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
      currentUser: {},
      items: []
    }
  }

  getUser = (currentUserId) => {
    console.log('currentUserId before api call ' + currentUserId)
    API.getUser(currentUserId).then((result) => {
      console.log('results ', result.data);
      this.setState({currentUser:result.data});
      return result.data;
    });

  }

  componentDidMount() {
    //console.log(window.localStorage);
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const storeState = store.getState();
    // console.log("This is storeState", storeState);
    console.log('from the store ' + storeState.auth.user.id);
    if (storeState.auth.user.id) {
      this.getUser(storeState.auth.user.id);
    } else {
      console.log('no user currently in store')
    };
    //console.log('store state ' + storeState.auth.user);
    // console.log(result.data)
    // const newState = this.state;
    // newState.user = storeState.auth.user
    // this.setState(newState);
    // console.log("This is the new state", this.state);
    //console.log('react state ' + this.state.user.id);
  }


  render() {
    return (
      <div className="largeContainer">
        <Provider store={store} user={this.state.user}>
          <Router user={this.state.user}>
            <div className="App">
              <Nav className="navStyles" user={this.state.currentUser} />
              <Route exact path="/" component={NotLoggedIn} user={this.state.user}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Switch>
                <PrivateRoute exact path="/LoggedIn" component={LoggedIn} />
              </Switch>
              <GrubFooter />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
