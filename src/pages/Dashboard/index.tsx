// Dependencies
import React from 'react';

// Custom Hooks
import useToysLegendNFTSale from '../../hooks/useToysLegendNFTSale';

const Dashboard: React.FC = () => {
  const toysLegendNFTSale = useToysLegendNFTSale();

  (window as any).toysLegendNFTSale = toysLegendNFTSale;

  return <div>Dashboard</div>;
};

export default Dashboard;
