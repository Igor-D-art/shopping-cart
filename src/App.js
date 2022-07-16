import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import { useEffect } from 'react';
import { useLocalStorage } from './utils/LocalStorage';


function App() {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  // const [products, setProducts] = useLocalStorage('products',[]);
  const [cart, setCart] = useLocalStorage('cart',[]);

  useEffect(() => {
    if (products.length===0) {
        fetchItems()
      }
    },[])


  const fetchItems = async () => {
      const data = await fetch(`https://fakestoreapi.com/products`);
      const items = await data.json();
      console.log(items)
      setProducts(items)
  }

  const addToCart = (product) => {
    if (cart.length) {
      const newCart = [...cart];

      let foundIndex = newCart.findIndex((item) => {
        return item.id === product.id;
      });    

      if (foundIndex >= 0) {
        newCart[foundIndex]["qty"] += 1;
        setCart(newCart);
      } else {
        product.qty = 1;
        newCart.push(product);
        setCart(newCart);
      }

    } else {
      product.qty = 1;
      const newCart = [product];
      setCart(newCart);
    }
  }

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const remIndex = newCart.indexOf(product);

    newCart.splice(remIndex, 1);
    setCart(newCart);
  }

  const changeQty = (product, action) => {
    const newCart = [...cart];
    const index = newCart.indexOf(product);

    if (newCart[index]['qty'] > 1){
      action==="+"? (newCart[index].qty +=1):(newCart[index].qty -=1)
    } else {
      action === "+" ? (newCart[index].qty += 1) : (newCart.splice(index, 1))
    }
    
    
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <CartProvider value={cart}> 
        <ProductsProvider value={products}>
          <div className="App">
            {/* nav component renders everywhere */}
            <Navigation />
            <div className='content'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop
                  addToCart={addToCart}/>} />
                <Route path="/shop/:id" element={<Shop />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/cart" element={<Cart
                  removeFromCart={removeFromCart}
                  changeQty={changeQty}/>}
                  />
            </Routes>
            </div>
          </div>
        </ProductsProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
