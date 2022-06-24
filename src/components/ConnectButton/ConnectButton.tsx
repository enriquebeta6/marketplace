// Dependencies
import React from 'react';

// Style
import './ConnectButton.scss';

interface ConnectButtonProps {
  onClick?(): void;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ onClick }) => (
  <button type='button' onClick={onClick} className='connect-button'>
    Connect Wallet
  </button>
);

export default ConnectButton;
