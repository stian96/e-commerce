'use client';

import React from 'react';
import { DarkModeProvider } from '@/context/DarkModeContext';
import { CartProvider } from '@/context/CartProvider';
import './globals.scss';

const Layout = ({ children }: { children: React.ReactNode}) => {
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
