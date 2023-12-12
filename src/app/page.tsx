"use client"
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';
import Home from '@/components/Home';
import Layout from './layout';

import './globals.scss';


const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleVisibillity = () => {
    console.log("Icon clicked!")
    setIsCartVisible(!isCartVisible)
  }


  return (
    <Layout>
      <Navigation onCartIconClicked={toggleVisibillity} />
      <Home />
      {isCartVisible && <Cart className={isCartVisible ? 'cart cart-visible' : 'cart'} />}
    </Layout>
  );
}

export default App;
