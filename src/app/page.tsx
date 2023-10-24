'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';
import './globals.scss';


const Home = () => {
  const { isDarkMode } = useDarkMode();

  return(
    <DarkModeProvider>
      <div className={`main-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navigation />
      </div>
    </DarkModeProvider>
  );
}

export default Home;
