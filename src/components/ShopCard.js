import React from "react";

function ShopCard(props) {
    
    return (
        <div className="shopCard">
            <div className="shopCardImage">
                <img src={props.image} alt="" />
            </div>

            <div className="shopCardDetails">
                <div>
                    <h3>{props.title}</h3>
                </div>
               
                <div>
                    <h3>{props.price}</h3>
                </div>
                

            </div>
            
            <button className="addShop">Add to cart</button>
            
        </div>
    )

}

export default ShopCard;