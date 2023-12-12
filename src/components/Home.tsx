"use client"
import { useDarkMode } from '../context/DarkModeContext';

const Home = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={`main-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

        </div>
    )
}

export default Home