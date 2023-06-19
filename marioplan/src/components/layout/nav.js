import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Dashboard from  "../dashboard/Dashboard";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = () => {
    return(
        <BrowserRouter>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">MarioPlan</Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default NavBar;