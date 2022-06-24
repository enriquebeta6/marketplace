// Dependencies
import { useMemo } from 'react';
import { useCalls } from '@usedapp/core';
import { utils } from 'ethers';

// Types
import NFTs from '../typings/types.d';

// Custom Hooks
import useToysLegendNFTSale from './useToysLegendNFTSale';

export default function useItems() {
  const toysLegendNFTSale = useToysLegendNFTSale();

  const mapTypeByStringConfig = Object.values(NFTs).map((type) => ({
    contract: toysLegendNFTSale,
    method: 'mapTypeByString',
    args: [type],
  }));

  const mapTypeByStringResponses = useCalls(mapTypeByStringConfig) ?? [];

  const priceByTypeConfig = mapTypeByStringResponses.map((response) => {
    const args = response?.value ?? [];

    if (args.length === 0) return null;

    return {
      args,
      method: 'priceByType',
      contract: toysLegendNFTSale,
    };
  });

  const priceByTypeResponses = useCalls(priceByTypeConfig) ?? [];

  const items = useMemo(() => {
    return Object.values(NFTs).map((type, index) => ({
      type,
      itemType: mapTypeByStringResponses[index]?.value?.[0],
      price: +utils.formatEther(priceByTypeResponses[index]?.value[0] ?? 0),
    }));
  }, [priceByTypeResponses]);

  return items;
}
