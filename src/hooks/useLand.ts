// Dependencies
import { useMemo } from 'react';
import { Contract } from 'ethers';

// Contract
import Land from '../contracts/Land';

// Custom Hooks
import useProvider from './useProvider';

export default function useLand() {
  const provider = useProvider();

  return useMemo(() => {
    return new Contract(Land.address, Land.abi, provider);
  }, []);
}
