'use client';

import { DarkModeProvider } from '@/context/DarkModeContext';
import React from 'react';
import Navigation from '../components/Navigation';
import './globals.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <html lang="en">
    <body>
    <DarkModeProvider>
        {children}
    </DarkModeProvider>
    </body>
  </html>
  );
}

export default Layout;
