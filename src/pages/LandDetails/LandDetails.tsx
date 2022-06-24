// Dependencies
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

// Styles
import './LandDetails.scss';

// Data
import pixels from '../../data/pixels';

// Components
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Currency from '../../components/Currency/Currency';
import PixelDetails from '../../components/PixelDetails/PixelDetails';
import Container from '../../components/Container/Container';
import CustomCountdown from '../../components/Countdown/Countdown';
import MiniCart from '../../components/MiniCart/MiniCart';
import Sidebar from '../../components/Sidebar/Sidebar';
import WhitelistBadge from '../../components/WhitelistBadge/WhitelistBadge';

// Custom Hooks
import usePixelPrice from '../../hooks/usePixelPrice';

const LandDetails: React.FC = () => {
  const { x, y } = useParams();

  const pixel = {
    x: parseInt(x as string, 10),
    y: parseInt(y as string, 10),
  };

  const price = usePixelPrice(pixel);

  const variation = useMemo(() => {
    const { variation: _variation = '' } =
      pixels.find(({ x: _x, y: _y }) => {
        return _x === pixel.x && _y === pixel.y;
      }) ?? {};

    return _variation;
  }, []);

  if (!price) return null;

  return (
    <Container>
      <Title>
        NFT SALE <WhitelistBadge />
      </Title>

      <Subtitle>LANDS</Subtitle>

      <section className='nft-sale'>
        <main className='land'>
          <aside className='legend'>
            <ul className='legend__section'>
              <li className='legend__item'>
                <span
                  className={classNames('legend__color', {
                    [`legend__color--${variation}`]: variation,
                  })}
                ></span>

                <span className='legend__content'>
                  <Currency amount={price} iconPosition='right' size='small' />
                </span>
              </li>

              <li className='legend__item'>
                <span className='legend__content'>
                  Coordinates <br />
                  Y: {y} <br />
                  X: {x}
                </span>
              </li>
            </ul>
          </aside>

          <div>
            <h3 className='land__title'>Select a land</h3>
            <PixelDetails />
          </div>
        </main>

        <Sidebar>
          <CustomCountdown />
          <MiniCart />
        </Sidebar>
      </section>
    </Container>
  );
};

export default LandDetails;
