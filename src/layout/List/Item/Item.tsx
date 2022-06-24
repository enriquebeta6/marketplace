// Dependencies
import React, { useMemo } from 'react';

// Style
import './Item.scss';

// Types
import { NFTs } from '../../../typings/types';

// Components
import Currency from '../../../components/Currency/Currency';
import QuantityControl from '../../../components/QuantityControl/QuantityControl';

// Custom Hooks
import useMiniCartContext from '../../../hooks/useMiniCartContext';
import usePriceByNFTAndVariation from '../../../hooks/usePriceByNFTAndVariation';

export interface ItemProps {
  name: string;
  image: string;
  nftType: NFTs;
  variation: number;
  variationText: string;
}

const Item: React.FC<ItemProps> = ({
  name,
  image,
  nftType,
  variation,
  variationText,
}) => {
  const { addItem, updateItem, removeItem, getQuantity, items } =
    useMiniCartContext();

  const initialQuantity = getQuantity?.({
    nftType,
    variation,
  });

  const price = usePriceByNFTAndVariation({
    nftType,
    variation,
  });

  const itemIndex = useMemo(
    () =>
      items?.findIndex(({ nftType: itemNftType, variation: itemVariation }) => {
        return itemNftType === nftType && itemVariation === variation;
      }) ?? -1,
    [items, variation]
  );

  const isAdded = itemIndex !== -1;

  return (
    <section className='item'>
      <img
        src={image}
        alt={name}
        className='item__image'
        width='150'
        height='150'
      />

      <div className='item__column'>
        <span className='item__column-name'>NAME</span>

        <span className='item__column-value'>{name}</span>
      </div>

      <div className='item__column'>
        <span className='item__column-name'>PRICE</span>

        <Currency amount={price} />
      </div>

      <QuantityControl
        initialQuantity={initialQuantity}
        onChange={(quantity) => {
          const prefixName = variationText;
          const name = `${prefixName} x${quantity}: ${price} BUSD`;

          const item = {
            name,
            nftType,
            price,
            quantity,
            variation,
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
    </section>
  );
};

export default Item;
