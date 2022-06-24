// Dependencies
import React from 'react';

// Styles
import './Subtitle.scss';

const Subtitle: React.FC = ({ children }) => {
  return <h2 className='subtitle'>{children}</h2>;
};

export default Subtitle;
