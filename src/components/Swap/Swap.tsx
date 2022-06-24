// Dependencies
import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';

// Style
import './Swap.scss';

// Assets
import busd from '../../assets/busd.png';
import coin from '../../assets/coin.png';

// Components
import Card from '../Card/Card';

const Swap: React.FC = () => {
  return (
    <Card>
      <section className='swap'>
        <h3 className='swap__title'>BUSD / TLC TOKEN SALE</h3>

        <section className='swap__currency'>
          <div className='currency__brand'>
            <img
              src={busd}
              alt='BUSD'
              width={32}
              height={32}
              className='currency__logo'
            />

            <span className='currency__name'>BUSD</span>
          </div>

          <input
            type='text'
            title='Value'
            placeholder='0.00'
            className='currency__value'
          />
        </section>

        <span className='swap__arrow'>
          <FaLongArrowAltDown color='#8d5ecb' />
        </span>

        <section className='swap__currency'>
          <div className='currency__brand'>
            <img
              alt='TLC'
              src={coin}
              width={32}
              height={32}
              className='currency__logo'
            />

            <span className='currency__name'>TLC</span>
          </div>

          <input
            type='text'
            title='Value'
            placeholder='0.00'
            className='currency__value'
          />
        </section>

        <section className='swap__current'>
          <span className='swap__current-label'>Price</span>

          <div className='swap__current-value'>0.75 BUSD per TLC</div>
        </section>

        <button className='swap__button' type='button'>
          Insufficient BUSD balance
        </button>
      </section>
    </Card>
  );
};

export default Swap;
