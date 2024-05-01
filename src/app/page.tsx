"use client"
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';
import Home from '@/components/Home';

import './globals.scss';


const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleVisibillity = () => {
    console.log("Icon clicked!")
    setIsCartVisible(!isCartVisible)
  }


  return (
    <>
      <Navigation onCartIconClicked={toggleVisibillity} />
      <Home />
      <Cart isOpen={isCartVisible} closeCart={toggleVisibillity} />
    </>
  );
}

export default App;
