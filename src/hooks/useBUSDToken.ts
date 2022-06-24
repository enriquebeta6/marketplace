// Dependencies
import { useMemo } from 'react';
import { Contract } from 'ethers';

// Contract
import BUSDToken from '../contracts/BUSDToken';

// Custom Hooks
import useProvider from './useProvider';

export default function useBUSDToken() {
  const provider = useProvider();

  return useMemo(() => {
    return new Contract(BUSDToken.address, BUSDToken.abi, provider);
  }, []);
}
