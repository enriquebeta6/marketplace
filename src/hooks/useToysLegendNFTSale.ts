// Dependencies
import { useMemo } from 'react';
import { Contract } from 'ethers';

// Contract
import ToysLegendNFTSale from '../contracts/ToysLegendNFTSale';

// Custom Hooks
import useProvider from './useProvider';

export default function useToysLegendNFTSale() {
  const provider = useProvider();

  return useMemo(() => {
    return new Contract(
      ToysLegendNFTSale.address,
      ToysLegendNFTSale.abi,
      provider
    );
  }, []);
}
