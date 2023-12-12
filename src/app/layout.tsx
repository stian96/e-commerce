'use client';

import React from 'react';
import { DarkModeProvider } from '@/context/DarkModeContext';
import { CartProvider } from '@/context/CartProvider';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Cart from '@/components/Cart';

import './globals.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleVisibillity = () => {
    console.log("Icon clicked!")
    setIsCartVisible(!isCartVisible)
  }

  return (
  <html lang="en">
    <body>
    <DarkModeProvider>
      <CartProvider>
      <Navigation onCartIconClicked={toggleVisibillity} />
        {children}
        {isCartVisible && <Cart className={isCartVisible ? 'cart cart-visible' : 'cart'} />}
      </CartProvider>
    </DarkModeProvider>
    </body>
  </html>
  );
}

export default Layout;
