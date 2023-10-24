'use client';

import { useDarkMode } from '../context/DarkModeContext';
import './globals.scss';
import Layout from './layout';
import Navigation from '@/components/Navigation';


const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  return(
  <div className={`main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
  </div>
  );
}

const App = () => {
  return (
    <Layout>
      <Navigation />
      <AppContent />
    </Layout>
  );
}

export default App;
