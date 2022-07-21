import React, { useContext } from "react";
import ShopCard from "./ShopCard";
import ProductsContext from "../context/ProductsContext";


function Shop(props) {

    const products = useContext(ProductsContext);
    console.log(products)

    return (
        <div className="shop">
            {products.length? (products.map((product) => {
                const key = products.indexOf(product);
                return (
                       <ShopCard key={key} 
                        addToCart={props.addToCart}
                        product={product} />

                )   
                })) : (<h3> Fetching your data. Please wait a few milliseconds....</h3>)
            }
        </div>
    )
}

export default Shop;