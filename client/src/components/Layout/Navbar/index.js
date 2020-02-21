import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavItem, Dropdown, Button, Divider } from 'react-materialize';
import "./style.css";


// Navbar is passed state from App.js, specifically the user model. So far, it renders login register functions when there is no one logged in and a welcome message with a dropdown for loggin out and viewing user settings and saved articles.

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div>
          {!this.props.user._id ? (
          <Navbar className="navbar-color-design"
          alignLinks="right"
          brand={<a className="navbar" href="/">Green Grub</a>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem href="/login" className='navItem'>
            Log In
          </NavItem>
          <NavItem href="/register" className='navItem'>
            Register
          </NavItem>
        </Navbar>
        ) : (
          <Navbar className="navbar-color-design"
          alignLinks="right"
          brand={<a className="navbar" href="/">Green Grub</a>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <div></div>
          <NavItem>
            <Dropdown
              options={{
                alignment: 'left',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: true,
                container: null,
                coverTrigger: true,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
              }}
              trigger={<Button node="button">Welcome {this.props.user.name}</Button>}
            >
              <a href="/settings">
                User Settings
              </a>
              <Divider />
              <a href="/MyArticles">
                Saved Articles
              </a>
              <Divider />
              <Divider />
              <a href="/MyRecipes">
                Saved Recipes
              </a>
              <Divider />
              <a href="/logout">
                Logout
              </a>
              
            </Dropdown>
          </NavItem>
          
        </Navbar>
        )}
        </div>
      </div>
    );
  }
}
export default Nav;