'use client';

import { useDarkMode } from '../context/DarkModeContext';
import { useState } from "react"
import Layout from './layout';
import Navigation from '@/components/Navigation';

import './globals.scss';
import Cart from '@/components/Cart';


const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  return(
  <div className={`main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
  </div>
  );
}

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleVisibillity = () => setIsCartVisible(!isCartVisible)

  return (
    <Layout>
      <Navigation onCartIconClicked={toggleVisibillity} />
      <AppContent />
      { isCartVisible && <Cart className={isCartVisible ? 'cart cart-visible' : 'cart'} /> }
    </Layout>
  );
}

export default App;
