'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import './globals.scss';


const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  }

  return(
    <div className={`main-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <h1>Home page!</h1>
    </div>
  );
}

export default Home;
