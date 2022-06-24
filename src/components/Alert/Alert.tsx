// Dependencies
import React from 'react';

// Style
import './Alert.scss';

const Alert: React.FC = () => (
  <section className='alert'>
    <h3 className='alert__title'>
      10% DISCOUNT ON THE PURCHASE OF ALL YOUR NFTS
    </h3>

    <span className='alert__paragraph'>
      We have made a change to the date of the NFTs presale and additionally we
      have added a 10% discount on all the NFTs you buy during the first week!
    </span>
  </section>
);

export default Alert;
