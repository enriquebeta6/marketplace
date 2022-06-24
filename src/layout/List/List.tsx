// Dependencies
import React from 'react';

// Styles
import './List.scss';

// Components
import Item, { ItemProps } from './Item/Item';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import Subtitle from '../../components/Subtitle/Subtitle';
import CountdownWrapper from '../../components/Countdown/Countdown';
import MiniCart from '../../components/MiniCart/MiniCart';
import Sidebar from '../../components/Sidebar/Sidebar';
import WhitelistBadge from '../../components/WhitelistBadge/WhitelistBadge';

interface ListProps {
  items: ItemProps[];
  subtitle: string;
}

const List: React.FC<ListProps> = ({ items, subtitle }) => {
  return (
    <Container>
      <Title>
        NFT SALE <WhitelistBadge />
      </Title>

      <Subtitle>{subtitle}</Subtitle>

      <section className='nft-sale'>
        <main className='nft-sale-list'>
          {items.map((item, index) => (
            <Item {...item} key={`${item.name}-${index}`} />
          ))}
        </main>

        <Sidebar>
          <CountdownWrapper />
          <MiniCart />
        </Sidebar>
      </section>
    </Container>
  );
};

export default List;
