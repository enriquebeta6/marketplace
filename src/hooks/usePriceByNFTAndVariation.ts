// Dependencies
import { useState, useEffect } from 'react';
import { utils } from 'ethers';

// Types
import { NFTAndVariation } from '../typings/types';

// Custom Hooks
import useToysLegendNFTSale from './useToysLegendNFTSale';

export default function usePriceByNFTAndVariation({
  nftType,
  variation,
}: NFTAndVariation) {
  const [price, setPrice] = useState(0);

  const toysLegendNFTSale = useToysLegendNFTSale();

  useEffect(() => {
    async function fetchPrice() {
      const priceBigNumber = await toysLegendNFTSale.priceByNFTAndVariation(
        nftType,
        variation
      );

      const newPrice = +utils.formatEther(priceBigNumber);

      setPrice(newPrice);
    }

    fetchPrice();
  }, [variation]);

  return price;
}
