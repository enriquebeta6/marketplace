// Dependencies
import React from 'react';
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

// Style
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>Toys Legend | All Rights Reserved</p>

        <nav className='footer__social-links'>
          <a
            href='https://discord.gg/fvm54EJFs7'
            className='link'
            title='Discord'
          >
            <FaDiscord size='24px' color='#fff' />
          </a>

          <a href='https://t.me/toyslegendnft' className='link' title='Discord'>
            <FaTelegramPlane size='24px' color='#fff' />
          </a>

          <a
            href='https://twitter.com/ToysLegendNFT'
            className='link'
            title='Discord'
          >
            <FaTwitter size='24px' color='#fff' />
          </a>

          <a
            href='https://www.facebook.com/groups/toyslegend'
            className='link'
            title='Discord'
          >
            <FaFacebook size='24px' color='#fff' />
          </a>

          <a
            href='https://www.instagram.com/toyslegendNFT/'
            className='link'
            title='Discord'
          >
            <FaInstagram size='24px' color='#fff' />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
