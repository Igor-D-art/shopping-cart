import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import CartCard from "./CartCard";
import { round } from "mathjs";

function Cart(props) {

    const cart = useContext(CartContext);

    const totalPrice = () => {
        let sum = 0;
        for (let i = 0; i < cart.length; i++){
            sum += parseFloat((cart[i].price * cart[i].qty));
            sum = round(sum, 2)
        }
        return sum;
    }

       if (!cart.length) {
            return (
                <h2>
                    Your cart is empty. Add some <Link to="/shop">products</Link> first.
                </h2>
            );
       } else {
           return (
               <div className="cart">
                   <div className="cart-products">
                       {(cart.map((product) => { 
                            const key = cart.indexOf(product);
                                return (
                                    <CartCard
                                        key={key}
                                        product={product}
                                        removeFromCart={props.removeFromCart}
                                        changeQty={props.changeQty} />
                                )   
                           }))
                        }
                    </div>
                   <div className="cart-details">
                       <div className="cart-total">
                            <h1>TOTAL:&nbsp;</h1>
                            <h1> ${ totalPrice() }</h1>
                       </div>
                            <button className="checkout"> Proceed to Checkout </button>
                   </div>
                    
                </div>
    )
       }
    
    

}

export default Cart;