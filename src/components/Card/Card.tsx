// Dependencies
import React from 'react';

// Style
import './Card.scss';

const Card: React.FC = ({ children }) => {
  return (
    <section className='card'>
      <div className='card__container'>{children}</div>
    </section>
  );
};

export default Card;
