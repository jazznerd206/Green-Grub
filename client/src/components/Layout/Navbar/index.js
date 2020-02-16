import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavItem } from 'react-materialize';
import "./style.css";

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(props) {
    //console.log.apply('mounted')
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
          {/* <NavItem href="/login">
            Log In
          </NavItem>
          <NavItem href="/register">
            Register
          </NavItem> */}
          <div>Welcome {this.props.user.name}</div>
          <NavItem href="/logout" className='navItem'>
            Log Out
          </NavItem>
        </Navbar>
        )}
        </div>
      </div>
    );
  }
}
export default Nav;