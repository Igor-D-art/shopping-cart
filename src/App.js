import './App.css';
import React from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Shop from './components/Shop';
import Contacts from './components/Contacts';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* nav component renders everywhere */}
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
