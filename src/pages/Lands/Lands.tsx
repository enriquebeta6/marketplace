// Dependencies
import React from 'react';

// Styles
import './Lands.scss';

// Types
import { LANDS, NFTs } from '../../typings/types.d';

// Components
import Subtitle from '../../components/Subtitle/Subtitle';
import Currency from '../../components/Currency/Currency';
import Pixels from '../../components/Pixels/Pixels';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import CountdownWrapper from '../../components/Countdown/Countdown';
import MiniCart from '../../components/MiniCart/MiniCart';
import Sidebar from '../../components/Sidebar/Sidebar';
import WhitelistBadge from '../../components/WhitelistBadge/WhitelistBadge';
import usePriceByNFTAndVariation from '../../hooks/usePriceByNFTAndVariation';

const Lands: React.FC = () => {
  const bluePrice = usePriceByNFTAndVariation({
    nftType: NFTs.LAND,
    variation: LANDS.BLUE,
  });

  const cyanPrice = usePriceByNFTAndVariation({
    nftType: NFTs.LAND,
    variation: LANDS.CYAN,
  });

  const greenPrice = usePriceByNFTAndVariation({
    nftType: NFTs.LAND,
    variation: LANDS.GREEN,
  });

  const orangePrice = usePriceByNFTAndVariation({
    nftType: NFTs.LAND,
    variation: LANDS.ORANGE,
  });

  const pinkPrice = usePriceByNFTAndVariation({
    nftType: NFTs.LAND,
    variation: LANDS.PINK,
  });

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
                <span className='legend__color legend__color--blue'></span>

                <span className='legend__content'>
                  <Currency
                    amount={bluePrice}
                    iconPosition='right'
                    size='small'
                  />
                </span>
              </li>

              <li className='legend__item'>
                <span className='legend__color legend__color--cyan'></span>

                <span className='legend__content'>
                  <Currency
                    amount={cyanPrice}
                    iconPosition='right'
                    size='small'
                  />
                </span>
              </li>

              <li className='legend__item'>
                <span className='legend__color legend__color--green'></span>

                <span className='legend__content'>
                  <Currency
                    amount={greenPrice}
                    iconPosition='right'
                    size='small'
                  />
                </span>
              </li>

              <li className='legend__item'>
                <span className='legend__color legend__color--orange'></span>

                <span className='legend__content'>
                  <Currency
                    amount={orangePrice}
                    iconPosition='right'
                    size='small'
                  />
                </span>
              </li>

              <li className='legend__item'>
                <span className='legend__color legend__color--pink'></span>

                <span className='legend__content'>
                  <Currency
                    amount={pinkPrice}
                    iconPosition='right'
                    size='small'
                  />
                </span>
              </li>
            </ul>

            <ul className='legend__section'>
              <li className='legend__item'>
                <span className='legend__color legend__color--disabled'></span>

                <span className='legend__content'>Unavailable</span>
              </li>

              <li className='legend__item'>
                <span className='legend__color legend__color--yellow'></span>

                <span className='legend__content'>Bank</span>
              </li>

              <li className='legend__item'>
                <span className='legend__color legend__color--black'></span>

                <span className='legend__content'>Important Area</span>
              </li>
            </ul>
          </aside>

          <div>
            <h3 className='land__title'>Select one pixel</h3>

            <Pixels />
          </div>
        </main>

        <Sidebar>
          <CountdownWrapper />
          <MiniCart />
        </Sidebar>
      </section>
    </Container>
  );
};

export default Lands;
