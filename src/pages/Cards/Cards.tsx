// Dependencies
import React from 'react';

// Components
import List from '../../layout/List/List';

// Data
import cardsImage from '../../data/cards';

const Cards: React.FC = () => {
  return <List subtitle='CARDS' items={cardsImage} />;
};

export default Cards;
