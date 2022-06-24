// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Style
import './ProductsGrid.scss';

// Assets
import toy from '../../assets/nfts/toy.png';
import skins from '../../assets/nfts/skins.png';
import weapons from '../../assets/nfts/weapons.png';
import cards from '../../assets/nfts/cards.png';
import lands from '../../assets/nfts/lands.png';
import establishments from '../../assets/nfts/establishments.png';

const nfts = [
  {
    name: 'Toys',
    image: toy,
    type: 'character',
  },
  {
    name: 'Skins',
    image: skins,
    type: 'skins',
  },
  {
    name: 'Weapons',
    image: weapons,
    type: 'weapons',
  },
  {
    name: 'Cards',
    image: cards,
    type: 'cards',
  },
  {
    name: 'Lands',
    image: lands,
    type: 'lands',
  },
  {
    name: 'Establishments',
    image: establishments,
    type: 'establishments',
  },
];

const ProductsGrid: React.FC = () => {
  return (
    <ul className='products-grid'>
      {nfts.map((nft) => (
        <li className='products-grid__item' key={nft.name}>
          <Link to={nft.type} className='item__link'>
            <img src={nft.image} alt={nft.name} className='item__image' />
            <h4 className='item__name'>{nft.name}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsGrid;
