// Types
import { NFTs } from '../typings/types.d';

// Assets
import common from '../assets/nfts/cards/card-common.png';
import rare from '../assets/nfts/cards/card-rare.png';
import epic from '../assets/nfts/cards/card-epic.png';
import pro from '../assets/nfts/cards/card-pro.png';
import legendary from '../assets/nfts/cards/card-legendary.png';
import superlegendary from '../assets/nfts/cards/card-superlegendary.png';

const imagesMap: Record<string, string> = {
  Common: common,
  Rare: rare,
  Epic: epic,
  Pro: pro,
  Legendary: legendary,
  'Super Legendary': superlegendary,
};

function getRarity(variation: number) {
  let prefix;

  if (variation < 11) {
    prefix = 'Common';
  } else if (variation < 17) {
    prefix = 'Rare';
  } else if (variation < 21) {
    prefix = 'Epic';
  } else if (variation < 24) {
    prefix = 'Pro';
  } else if (variation < 25) {
    prefix = 'Legendary';
  } else {
    prefix = 'Super Legendary';
  }

  return prefix;
}

const variations = [];
const augments: number[] = [];

for (let i = 1, augment = 5; i < 26; i++, augment++) {
  variations.push(i);

  if (i === 25) {
    augments.push(augment + 1);
  } else {
    augments.push(augment);
  }
}

const cards = variations.map((variation, index) => {
  const rarity = getRarity(variation);
  const name = `${rarity} +${augments[index]}`;

  return {
    name,
    variation,
    image: imagesMap[rarity],
    nftType: NFTs.CARD,
    variationText: `Card ${name}`,
  };
});

export default cards;
