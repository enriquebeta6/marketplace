// Types
import { NFTs, MUNITION_FACTORY, BATTERY_FACTORY } from '../typings/types.d';

// Assets

// Battery Factory
import batteryFactoryCommon from '../assets/nfts/establishments/battery-common.png';
import batteryFactoryPro from '../assets/nfts/establishments/battery-pro.png';
import batteryFactoryLegendary from '../assets/nfts/establishments/battery-legendary.png';

// Munition Factory
import munitionFactoryCommon from '../assets/nfts/establishments/munition-common.png';
import munitionFactoryPro from '../assets/nfts/establishments/munition-pro.png';
import munitionFactoryLegendary from '../assets/nfts/establishments/munition-legendary.png';

import market from '../assets/nfts/establishments/market.png';

const batteryFactoryImagesMap: Record<string, string> = {
  Common: batteryFactoryCommon,
  Pro: batteryFactoryPro,
  Legendary: batteryFactoryLegendary,
};

const munitionFactoryImagesMap: Record<string, string> = {
  Common: munitionFactoryCommon,
  Pro: munitionFactoryPro,
  Legendary: munitionFactoryLegendary,
};

const batteryFactory = [
  BATTERY_FACTORY.COMMON,
  BATTERY_FACTORY.PRO,
  BATTERY_FACTORY.LEGENDARY,
].map((variation) => {
  const rarity = {
    [BATTERY_FACTORY.COMMON]: 'Common',
    [BATTERY_FACTORY.PRO]: 'Pro',
    [BATTERY_FACTORY.LEGENDARY]: 'Legendary',
  }[variation];

  const name = `Battery Factory ${rarity}`;

  return {
    name,
    variation,
    variationText: name,
    image: batteryFactoryImagesMap[rarity],
    nftType: NFTs.BATTERY_FACTORY,
  };
});

const munitionFactory = [
  MUNITION_FACTORY.COMMON,
  MUNITION_FACTORY.PRO,
  MUNITION_FACTORY.LEGENDARY,
].map((variation) => {
  const rarity = {
    [MUNITION_FACTORY.COMMON]: 'Common',
    [MUNITION_FACTORY.PRO]: 'Pro',
    [MUNITION_FACTORY.LEGENDARY]: 'Legendary',
  }[variation];

  const name = `Munition Factory ${rarity}`;

  return {
    name,
    variation,
    variationText: name,
    image: munitionFactoryImagesMap[rarity],
    nftType: NFTs.MUNITION_FACTORY,
  };
});

const establishments = [
  ...batteryFactory,
  ...munitionFactory,
  {
    name: 'Market',
    image: market,
    variation: 1,
    nftType: NFTs.MARKET,
    variationText: 'Market',
  },
];

export default establishments;
