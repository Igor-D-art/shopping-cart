import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {
    
    return (
        <nav className="navigation">
            <Link to={'/'}>LOGO</Link>

            <ul className="nav-links">
                <Link to={'/'}> Home </Link>
                <Link to={'/shop'}> Shop </Link>
                <Link to={'/contacts'}> Contacts </Link>
                <Link to={'/cart'}>
                    <img className="cart-img" src='images/cart.png' alt="" />
                    <p>0</p>
                </Link>
            </ul>
        </nav>
    )

}

export default Navigation;