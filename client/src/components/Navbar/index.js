import React from "react";
import "./style.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand title" href="/">
                <h1>Green Grub</h1>
            </a>
            <a className="navbar-brand" href="/login">
                <p>Login</p>
            </a>
            <a className="navbar-brand" href="/register">
                <p>Register</p>
            </a>
        </nav>
    )
}

export default Navbar