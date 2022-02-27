// Dependencies
import React from 'react';

// Style
import './Header.scss';

// Assets
import logo from '../../assets/logo.png';

// Components
import ConnectButton from '../ConnectButton/ConnectButton';

const links = [
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    name: 'Marketplace',
    url: '/marketplace',
  },
  {
    name: 'NFT Sale',
    url: '/nft-sale',
  },
  {
    name: 'Token Sale',
    url: '/token-sale',
  },
];

export default function Header() {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Toys Legend Logo' />

      <nav className='header__links'>
        {links.map((link) => (
          <a className='header__link' key={link.url}>
            <span className='header__link-label'>{link.name}</span>
          </a>
        ))}
      </nav>

      <ConnectButton />
    </header>
  );
}
