import React from "react";

function CartCard(props) {

    const product = props.product;
    console.log(props)
    
    return (
        <div className="cartCard">
            <div className="cartCardImage">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="shopCardDetails">
                <div>
                    <h3>{product.title}</h3>
                </div>
               
                <div>
                    <h3>$ {product.price}</h3>
                </div>

                <div className="qty">
                    <button id="+" onClick={() => {props.changeQty(product, '-')}}> - </button>
                    <p> {product.qty}</p>
                    <button id="-" onClick={() => {props.changeQty(product, '+')}}> + </button>
                </div>

                <button className="removeProduct"
                onClick={() => { props.removeFromCart(product) }}>Remove from cart</button>
            </div>
            
        </div>
    )

}

export default CartCard;