import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navigation(props) {
    
    let cart = useContext(CartContext);

    if (!cart ) {
        cart = []
    }
    
    const totalQty = () => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++){
            sum += cart[i].qty 
        }
        return sum;
    }
    
    return (
        <nav className="navigation" data-testid='header'>
            <Link to={'/'}><h1 className="shop-name">BARAHLISHKO</h1></Link>
            <div className="link-container">
                <ul className="nav-links">
                    <div className="link-wrapper">
                        <Link to={'/'}> Home </Link>
                    </div>
                    
                    <div className="link-wrapper">
                        <Link to={'/shop'}> Shop </Link>
                    </div>

                    <div className="link-wrapper">
                        <Link to={'/contacts'}> Contacts </Link>
                    </div>

                    <div className="link-wrapper">

                        <Link to={'/cart'}>
                            {(cart.length===0) ? (
                                <img className="cart-img" src='images/cart.png' alt="" />
                            ) : (
                                <div className="nav-cart">
                                    <img className="cart-img" src='images/cart.png' alt="" />
                                    <p className="cart-qty">{ totalQty() }</p>
                                </div>
                            )}
                            
                        </Link>
                    </div>
                </ul>
            </div>
        </nav>
    )

}

export default Navigation;