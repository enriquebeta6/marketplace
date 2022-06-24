// Dependencies
import React from 'react';

// Style
import './TokenSaleDetails.scss';

// Components
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import CardTokenSale, {
  CardTokenSaleProps,
} from '../../components/CardTokenSale/CardTokenSale';
import Swap from '../../components/Swap/Swap';

// Data
import data from './mockData';

const sale = data[0];

const TokenSaleDetails = () => {
  const info = Object.entries(sale.details).map(([label, value]) => ({
    label,
    value,
  }));

  return (
    <Container>
      <Title>Token Sale</Title>

      <div className='sale'>
        <div className='sale__details'>
          <CardTokenSale
            info={info}
            key={sale.address}
            address={sale.address}
            progress={sale.progress}
            status={sale.status as CardTokenSaleProps['status']}
          />
        </div>

        <div className='sale__swap'>
          <Swap />
        </div>
      </div>
    </Container>
  );
};

export default TokenSaleDetails;
