import Link from 'next/link'
import { useDarkMode } from '@/context/DarkModeContext';
import Image from 'next/image';

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
                <li className='navigation__item logo'>
                    <Image className='logo__image' src="/logo.png" alt="Shop Logo" width={80} height={80} />
                </li>
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