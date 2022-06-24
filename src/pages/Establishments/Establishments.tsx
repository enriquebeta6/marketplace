// Dependencies
import React from 'react';

// Components
import List from '../../layout/List/List';

// Data
import establishments from '../../data/establishments';

const Establishments: React.FC = () => {
  return <List subtitle='ESTABLISHMENTS' items={establishments} />;
};

export default Establishments;
