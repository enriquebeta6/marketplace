// Dependencies
import React from 'react';

// Assets
import bsc from '../../assets/bsc.png';
import tlc from '../../assets/coin.png';

// Style
import './CardTokenSale.scss';

// Componetns
import Card from '../Card/Card';
import Badge from '../Badge/Badge';
import Progress from '../Progress/Progress';

interface Info {
  label: string;
  value: string;
}

export interface CardTokenSaleProps {
  info: Info[];
  address: string;
  progress: number;
  [key: string]: unknown;
  status: 'active' | 'ended';
}

const BSCBadge: React.FC = () => (
  <Badge
    variant='grey'
    text={
      <>
        <img
          src={bsc}
          width={16}
          height={16}
          className='bsc-logo'
          alt='BINANCE SMART CHAIN'
        />
        BINANCE SMART CHAIN
      </>
    }
  />
);

const CardTokenSale: React.FC<CardTokenSaleProps> = ({
  info,
  status,
  address,
  progress = 0,
}) => {
  return (
    <Card>
      <div className='card__top'>
        <img src={tlc} alt='TLC' className='coin' width={32} height={32} />

        <BSCBadge />

        <Badge
          variant={status === 'active' ? 'green' : 'red'}
          text={
            <>
              <span className='elipse'></span>
              {status === 'active' ? 'Sale Active' : 'Sale Ended'}
            </>
          }
        />
      </div>

      <h3 className='card__title'>
        TOYS LEGEND COIN <span className='card__title--small'>(TLC)</span>
      </h3>

      <h4 className='card__subtitle'>{address}</h4>

      {info.length > 0 && (
        <ul className='card__info'>
          {info.map(({ label, value }) => (
            <li className='info' key={label}>
              <span className='info__name'>{label}</span>

              <span className='info__value'>{value}</span>
            </li>
          ))}
        </ul>
      )}

      <Progress percentage={progress} />
    </Card>
  );
};

export default CardTokenSale;
