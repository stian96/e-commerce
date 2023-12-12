'use client';

import { DarkModeProvider } from '@/context/DarkModeContext';
import { CartProvider } from '@/context/CartProvider';
import React from 'react';
import './globals.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <html lang="en">
    <body>
    <DarkModeProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </DarkModeProvider>
    </body>
  </html>
  );
}

export default Layout;
