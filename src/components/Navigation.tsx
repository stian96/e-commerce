import React, { use, useContext } from 'react';
import Link from 'next/link'
import { useDarkMode } from '@/context/DarkModeContext';

import '../styles/navigation.scss';
import '../app/globals.scss';


const Navigation = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav className={`navigation ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className='navigation__banner'>
                <Link className='navigation__costumer-service 'href="/costumer" passHref>CostumerService</Link>
                <span className='navigation__sale'>Final Sale - Up To 60% Discount</span>
                <button 
                    type='button' 
                    className='navigation__mode'
                    onClick={toggleDarkMode}
                    >
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <ul className='navigation__list'>
                <span className='navigation__logo'>Shop</span>
                <div className='navigation__link-container'>
                    <li className='navigation__item'>
                        <Link className='navigation__link' href="/" passHref>Home</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link className='navigation__link' href="/products">Products</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link className='navigation__link' href="/about">About</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navigation;