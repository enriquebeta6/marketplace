// Dependencies
import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { shortenAddress } from '@usedapp/core';

// Style
import './Header.scss';

// Assets
import logo from '../../assets/logo.png';

// Components
import ConnectButton from '../ConnectButton/ConnectButton';
import useFeatureFlags from '../../hooks/useFeatureFlags';

const links = [
  {
    name: 'Dashboard',
    url: 'dashboard',
  },
  {
    name: 'Marketplace',
    url: 'marketplace',
  },
  {
    name: 'NFT Sale',
    url: 'nft-sale',
  },
  {
    name: 'Token Sale',
    url: 'token-sale',
  },
];

const Header: React.FC = () => {
  const {
    flags: { CAN_BUY },
  } = useFeatureFlags();
  const { authenticate, isAuthenticated, account } = useMoralis();

  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__logo' src={logo} alt='Toys Legend Logo' />

        <nav className='header__links'>
          {links.map((link) => (
            <NavLink
              to={link.url}
              key={link.url}
              className={({ isActive }) =>
                classNames('header__link', {
                  'header__link--active': isActive,
                })
              }
            >
              <span className='header__link-label'>{link.name}</span>
            </NavLink>
          ))}
        </nav>

        {CAN_BUY && (
          <>
            {!isAuthenticated && (
              <ConnectButton
                onClick={() =>
                  authenticate({
                    signingMessage: 'Connect Wallet to Toys Legend App',
                  })
                }
              />
            )}

            {account && isAuthenticated && (
              <span style={{ color: 'white' }}>{shortenAddress(account)}</span>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
