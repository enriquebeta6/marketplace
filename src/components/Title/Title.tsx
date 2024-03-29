// Dependencies
import React from 'react';

// Styles
import './Title.scss';

const Title: React.FC = ({ children }) => {
  return <h1 className='title'>{children}</h1>;
};

export default Title;
