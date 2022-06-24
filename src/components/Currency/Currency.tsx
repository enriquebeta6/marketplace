// Dependencies
import React from 'react';
import classNames from 'classnames';

// Assets
import busd from '../../assets/busd.png';

// Style
import './Currency.scss';

interface CurrencyProps {
  amount: number;
  size?: 'small' | 'normal';
  iconPosition?: 'left' | 'right';
}

const Currency: React.FC<CurrencyProps> = ({
  amount,
  size = 'normal',
  iconPosition = 'left',
}) => {
  const Img = (
    <img
      src={busd}
      alt='BUSD'
      width={size === 'small' ? 16 : 26}
      height={size === 'small' ? 16 : 26}
      className={classNames('currency__logo', {
        'currency__logo--left': iconPosition === 'left',
        'currency__logo--right': iconPosition === 'right',
      })}
    />
  );

  return (
    <span
      className={classNames('currency', {
        'currency--small': size === 'small',
        'currency--normal': size === 'normal',
      })}
    >
      {iconPosition === 'left' && Img}
      {amount} BUSD
      {iconPosition === 'right' && Img}
    </span>
  );
};

export default Currency;
