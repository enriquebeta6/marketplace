// Dependencies
import React, { useMemo } from 'react';

// Types
import { NFTs } from '../../typings/types.d';

// Styles
import './CharacterOrSkins.scss';

// Components
import Section, { SectionProps } from './Section/Section';
import Subtitle from '../../components/Subtitle/Subtitle';
import Currency from '../../components/Currency/Currency';
import QuantityControl from '../../components/QuantityControl/QuantityControl';
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import CountdownWrapper from '../../components/Countdown/Countdown';
import MiniCart from '../../components/MiniCart/MiniCart';
import Sidebar from '../../components/Sidebar/Sidebar';
import WhitelistBadge from '../../components/WhitelistBadge/WhitelistBadge';

// Custom Hooks
import usePriceByNFTAndVariation from '../../hooks/usePriceByNFTAndVariation';
import useMiniCartContext from '../../hooks/useMiniCartContext';

interface DetailsProps {
  image: string;
  nftType: NFTs;
  variation?: number;
  sections: SectionProps[];
}

const CharacterOrSkins: React.FC<DetailsProps> = ({
  nftType,
  image,
  sections,
  variation = 1,
}) => {
  const price = usePriceByNFTAndVariation({ nftType, variation });
  const { addItem, updateItem, removeItem, getQuantity, items } =
    useMiniCartContext();

  const initialQuantity = getQuantity?.({ nftType, variation });

  const itemIndex = useMemo(() => {
    return (
      items?.findIndex(({ nftType: itemNftType, variation: itemVariation }) => {
        return itemNftType === nftType && itemVariation === variation;
      }) ?? -1
    );
  }, [items]);

  const isAdded = itemIndex !== -1;

  if (!price) return null;

  return (
    <Container>
      <Title>
        NFT SALE <WhitelistBadge />
      </Title>

      <Subtitle>
        {nftType} {price && <Currency amount={price} />}
      </Subtitle>

      <section className='nft-sale'>
        <main className='nft-sale-details'>
          <div className='nft-sale-details__column'>
            <img
              src={image}
              alt='character'
              className='nft-sale-details__image'
            />

            <QuantityControl
              initialQuantity={initialQuantity}
              onChange={(quantity) => {
                const item = {
                  nftType,
                  price,
                  quantity,
                  variation,
                  name: `${nftType} x${quantity}: ${price} BUSD`,
                };

                if (quantity === 0) {
                  removeItem?.(itemIndex);

                  return;
                }

                if (isAdded) {
                  updateItem?.({ index: itemIndex, item });
                } else {
                  addItem?.(item);
                }
              }}
            />
          </div>

          <div className='nft-sale-details__column'>
            {sections.map((section) => (
              <Section {...section} key={section.title} />
            ))}
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

export default CharacterOrSkins;
