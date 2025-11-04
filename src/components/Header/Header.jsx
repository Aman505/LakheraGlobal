import React from "react";
import './Header.css';
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-left">
                <NavLink to="/dashboard">
                    <img src="/assets/login/Logo.svg" alt="Logo" className="logo" />
                </NavLink>
            </div>
            <nav className="navbar-center">
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Customers</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
            </nav>
            <div className="navbar-right">
                <Search className="search-icon" />
                <button className="signin-btn">Sign In</button>
            </div>
        </header>
    );
}
export default Header;

