// Dependencies
import React from 'react';

// Components
import List from '../../layout/List/List';

// Data
import weapons from '../../data/weapons';

const Weapons: React.FC = () => {
  return <List subtitle='WEAPONS' items={weapons} />;
};

export default Weapons;
