import React from "react";
import "./style.css";
import { Container, Navbar, Icon, NavItem } from 'react-materialize';


function Nav() {
    return (
    <Container>
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Logo</a>}
            menuIcon={<Icon>menu</Icon>}
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
                Login
            </NavItem>
            <NavItem href="components.html">
                Register
            </NavItem>
        </Navbar>
    </Container>
    )
}

export default Nav