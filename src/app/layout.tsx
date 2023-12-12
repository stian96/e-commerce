'use client';

import { DarkModeProvider } from '@/context/DarkModeContext';
import React from 'react';
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
