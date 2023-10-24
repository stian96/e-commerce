'use client';
import Navigation from '@/components/Navigation';
import { DarkModeProvider, useDarkMode } from '../context/DarkModeContext';
import './globals.scss';


const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  return(
      <div className={`main-container ${isDarkMode ? 'dark-mode' : ''}`}>
        <Navigation />
      </div>
  );
}

const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
