// Dependencies
import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

// Style
import './MiniCart.scss';

// Custom Hooks
import useMiniCartContext from '../../hooks/useMiniCartContext';
import useFeatureFlags from '../../hooks/useFeatureFlags';

const MiniCart: React.FC = () => {
  const {
    flags: { CAN_BUY },
  } = useFeatureFlags();

  const {
    items,
    lands,
    total,
    removeItem,
    removeLand,
    executeBuyTransactions,
  } = useMiniCartContext();

  if (total === 0) return null;

  return (
    <section className='minicart'>
      <div className='minicart__wrapper'>
        <header className='minicart__header'>
          <h3 className='minicart__title'>SHOPPING LIST</h3>
        </header>

        <main className='minicart__content'>
          {!!items?.length && (
            <>
              <h4 className='minicart__content-title'>Items</h4>
              <ul className='minicart__items'>
                {items?.map((item, index) => (
                  <li
                    className='item'
                    key={`${item.nftType}-${item.variation}`}
                  >
                    {item.name}

                    <AiFillCloseCircle
                      onClick={() => {
                        removeItem?.(index);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}

          {!!lands?.length && (
            <>
              <h4 className='minicart__content-title'>Lands</h4>
              <ul className='minicart__items'>
                {lands?.map((land) => (
                  <li
                    className='item'
                    key={`${land.y}-${land.x}-${land.position}`}
                  >
                    Land X: {land.x} Y: {land.y} P: {land.position}
                    <AiFillCloseCircle
                      onClick={() => {
                        removeLand?.(land);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}

          <span className='minicart__total'>TOTAL BUSD: {total}</span>
        </main>

        <footer className='minicart__footer'>
          <button
            type='button'
            className='minicart__buy-button'
            onClick={() => {
              CAN_BUY && executeBuyTransactions?.();
            }}
          >
            BUY NOW
          </button>
        </footer>
      </div>
    </section>
  );
};

export default MiniCart;
