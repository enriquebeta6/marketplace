// Dependencies
import React from 'react';

// Style
import './TokenSale.scss';

// Components
import Title from '../../components/Title/Title';
import Container from '../../components/Container/Container';
import CardTokenSale, {
  CardTokenSaleProps,
} from '../../components/CardTokenSale/CardTokenSale';

// Data
import data from './mockData';

const TokenSale = () => {
  return (
    <Container>
      <Title>Token Sale</Title>

      <div className='cards-grid'>
        {data.map((sale) => {
          const info = Object.entries(sale.details).map(([label, value]) => ({
            label,
            value,
          }));

          return (
            <CardTokenSale
              info={info}
              key={sale.address}
              address={sale.address}
              progress={sale.progress}
              status={sale.status as CardTokenSaleProps['status']}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default TokenSale;
