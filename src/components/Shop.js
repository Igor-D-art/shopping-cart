import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ShopCard from "./ShopCard";

function Shop() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems()
    },[])


    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products?limit=5');
        const items = await data.json();
        console.log(items)
        setItems(items)
    }
    
    return (
        <div className="shop">
            {items.length>0? (items.map((item) => {
                const key = items.indexOf(item);
                return (
                    // <h1 key={key}>
                    //     <Link to={`/shop/${item.id}`}>{item.title}</Link>
                    // </h1>
                    <ShopCard key={key}
                        title={item.title}
                        image={item.image}
                        price={item.price} />
                )   
                })) : (<h3> Fetching your data. Please wait a few milliseconds....</h3>)
            }
        </div>
    )

}

export default Shop;