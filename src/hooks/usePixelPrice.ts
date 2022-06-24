// Dependencies
import { useState, useEffect } from 'react';
import { utils } from 'ethers';

// Custom Hooks
import useToysLegendNFTSale from './useToysLegendNFTSale';

interface Pixel {
  y: number;
  x: number;
}

export default function usePixelPrice({ x, y }: Pixel) {
  const [price, setPrice] = useState(0);

  const toysLegendNFTSale = useToysLegendNFTSale();

  useEffect(() => {
    async function fetchPrice() {
      const priceBigNumber = await toysLegendNFTSale.priceByPixel(y, x);

      const newPrice = +utils.formatEther(priceBigNumber);

      setPrice(newPrice);
    }

    fetchPrice();
  }, []);

  return price;
}
