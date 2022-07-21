import React from "react";
import { Link } from "react-router-dom";

function ShopCard(props) {

    const product = props.product;
    
    return (
        <div className="shopCard">
            <Link
                to={`/shop/${product.id}`}
                state={{ product: product }}>
                <div className="shopCardImage">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="shopCardDetails">
                    <div className="prod-title">
                        <h3>{product.title}</h3>
                    </div>
                
                    <div className="prod-price">
                        <h3>$ {product.price}</h3>
                    </div>
                    
                </div>
            </Link>
            
            <button className="add-to-cart"
                    onClick={() => {
                        props.addToCart(product);
                    }
                }>Add to cart</button>
        </div>
    )

}

export default ShopCard;