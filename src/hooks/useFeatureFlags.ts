// Dependencies
import { useState, useEffect } from 'react';

// Custom Hooks
import useToysLegendNFTSale from './useToysLegendNFTSale';

export default function useFeatureFlags() {
  const [whitelistOnly, setWhitelistOnly] = useState(false);
  const toysLegendNFTSale = useToysLegendNFTSale();

  useEffect(() => {
    toysLegendNFTSale?.whitelistOnly().then(setWhitelistOnly);
  }, []);

  return {
    flags: {
      WHITELIST_ONLY: whitelistOnly,
      CAN_BUY: true,
    },
  };
}
