import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, NavItem } from 'react-materialize';
import "./style.css";


class Nav extends Component {
  render() {
    return (
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
          <NavItem href="/login">
            Log In
          </NavItem>
          <NavItem href="/register">
            Register
          </NavItem>
        </Navbar>
    );
  }
}
export default Nav;