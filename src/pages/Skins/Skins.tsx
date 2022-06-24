// Dependencies
import React from 'react';

// Types
import { NFTs } from '../../typings/types.d';

// Components
import CharacterOrSkins from '../../layout/CharacterOrSkins/CharacterOrSkins';

// Assets
import skins from '../../assets/nfts/skins.png';

// Data
import skinItems from '../../data/skins';

const data = {
  nftType: NFTs.SKIN,
  image: skins,
  sections: [
    {
      variant: 'gallery',
      title: 'Random Skins',
      items: skinItems,
    },
    {
      variant: 'list',
      title: 'Random Skills',
      items: [
        {
          name: 'Skill 1',
          value: '+1',
        },
        {
          name: 'Skill 2',
          value: '+2',
        },
        {
          name: 'Skill 3',
          value: '+3',
        },
        {
          name: 'Skill 4',
          value: '+4',
        },
        {
          name: 'Skill 5',
          value: '+5',
        },
      ],
    },
  ],
};

const Skins: React.FC = () => {
  return <CharacterOrSkins {...data} />;
};

export default Skins;
