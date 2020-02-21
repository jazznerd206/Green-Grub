import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Items from "./components/StoreData"
import Nav from "./components/Layout/Navbar";
import DietarySelector from "./components/DietaryButtons";
import GrubFooter from "./components/GrubFooter"
import NotLoggedIn from "./pages/NotLoggedIn";
import Login from "./components/auth/Login.js";
import Logout from "./components/auth/Logout.js";
import Register from "./components/auth/Register.js";
import Settings from "./components/auth/Settings.js";
import PrivateRoute from "./components/private-route/PrivateRoute";
import LoggedIn from "./components/LoggedIn/LoggedIn";
import API from "./utils/API";
import MyArticles from "./pages/MyArticles";
import MyRecipes from "./pages/MyRecipes";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()




// CHECK LOCAL STORAGE FOR AUTHORIZATION. IF AUTHORIZATION HAS EXPIRED, RETURN THEM TO LOGIN
if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
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


  // triggered by componentDidMount, if there is a user authorized in the redux store, pull that user and update the react state to reflect all data pulled from mongo document associated with that ID
  getUser = (currentUserId) => {
    console.log('currentUserId before api call ' + currentUserId)
    API.getUser(currentUserId).then((result) => {
      console.log('results ', result.data);
      this.setState({currentUser:result.data});
      return result.data;
    });

  }

  // checks redux store for authorized user by ID, calls getUser if id exists.
  componentDidMount() {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const storeState = store.getState();
    console.log('from the store ' + storeState.auth.user.id);
    if (storeState.auth.user.id) {
      this.getUser(storeState.auth.user.id);
    } else {
      console.log('no user currently in store')
    };
  }



  render() {
    return (
      <div className="largeContainer">
        <Provider store={store} user={this.state.user}>
          <Router user={this.state.user}>
            <div className="App">
              <Nav className="navStyles" user={this.state.currentUser} />
              <DietarySelector user={this.state.currentUser}/>
              <Route exact path="/" component={() => <NotLoggedIn user={this.state.currentUser}/>}/>
              <Route exact path="/myarticles" component={() => <MyArticles user={this.state.currentUser}/>}/>
              <Route exact path = "/myrecipes" component = {() => <MyRecipes user = {this.state.currentUser}/>}/>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/settings" component={Settings} user={this.state.currentUser} />
              <Route exact path="/diets" component={WelcomeHeader} />
              <Switch>
                <PrivateRoute exact path="/LoggedIn" component={LoggedIn} />
              </Switch>
              <GrubFooter user={this.state.currentUser} />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
export default App;
