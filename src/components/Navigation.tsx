import React from 'react';
import Link from 'next/link'

import '../styles/navigation.scss';
import '../app/globals.scss';

type NavigationProp = {
    isDarkMode?: boolean;
    toggleDarkMode?: () => void;
}

const Navigation: React.FC<NavigationProp> = ({ isDarkMode, toggleDarkMode }) => {

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