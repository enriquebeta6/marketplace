// Dependencies
import React from 'react';

// Style
import './NFTSale.scss';

// Components
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import CustomCountdown from '../../components/Countdown/Countdown';
import MiniCart from '../../components/MiniCart/MiniCart';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import Sidebar from '../../components/Sidebar/Sidebar';
import WhitelistBadge from '../../components/WhitelistBadge/WhitelistBadge';

const NFTSale: React.FC = () => {
  return (
    <Container>
      <Title>
        NFT SALE <WhitelistBadge />
      </Title>

      <section className='nft-sale'>
        <main className='content'>
          <ProductsGrid />
        </main>

        <Sidebar>
          <CustomCountdown />
          <MiniCart />
        </Sidebar>
      </section>
    </Container>
  );
};

export default NFTSale;
