import React from "react";
import { useLocation } from "react-router-dom";

function ProductDetail() {

    const shopCard = useLocation()
    const { product } = shopCard.state;

    return (
        <>
            <img src={product.image} alt=''/>
            <h1>{product.description}</h1>
        </>
    )

}

export default ProductDetail;