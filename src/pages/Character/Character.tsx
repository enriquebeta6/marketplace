// Dependencies
import React from 'react';

// Types
import { NFTs } from '../../typings/types.d';

// Components
import CharacterOrSkins from '../../layout/CharacterOrSkins/CharacterOrSkins';

// Assets
import toy from '../../assets/nfts/toy.png';

const skills = [
  'Recharge Time',
  'Stamina Comsuption',
  'Life',
  'Letal Damage',
  'Spark Inventory',
  'Critical Damage',
  'Recovery',
  'Jump',
  'Shield',
  'Aim Assistance',
  'Plastic Inventory',
  'Dash',
  'Secrecy',
  'Movement Speed',
  'Stamina',
];

const data = {
  nftType: NFTs.TOY,
  image: toy,
  sections: [
    {
      variant: 'list',
      title: 'Random Skills',
      items: skills.map((skill) => ({
        name: skill,
        value: '60 - 100',
      })),
    },
  ],
};

const Character: React.FC = () => {
  return <CharacterOrSkins {...data} />;
};

export default Character;
