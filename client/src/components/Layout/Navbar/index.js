import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, NavItem } from 'react-materialize';
import './style.css';


class Nav extends Component {
  render() {
    return (
      <Container className="navContainer">
        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="#">Green Grub</a>}
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
          <NavItem href="">
            <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
            </Link>
          </NavItem>
          <NavItem href="components.html">
            <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
            </Link>
          </NavItem>
        </Navbar>
      </Container>
    );
  }
}
export default Nav;