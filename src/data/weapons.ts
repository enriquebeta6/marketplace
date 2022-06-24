// Types
import { WEAPONS, NFTs } from '../typings/types.d';

// Assets
import glock from '../assets/nfts/weapons/1.png';
import sheriff from '../assets/nfts/weapons/2.png';
import uzi from '../assets/nfts/weapons/3.png';
import shorty from '../assets/nfts/weapons/4.png';
import p90 from '../assets/nfts/weapons/5.png';
import aka47 from '../assets/nfts/weapons/6.png';
import skar from '../assets/nfts/weapons/7.png';
import barret from '../assets/nfts/weapons/8.png';
import grenadeLauncher from '../assets/nfts/weapons/9.png';
import bazooka from '../assets/nfts/weapons/10.png';

const weapons = [
  {
    name: 'Glock',
    image: glock,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.GLOCK,
    variationText: 'Glock',
  },
  {
    name: 'Sheriff',
    image: sheriff,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.SHERIFF,
    variationText: 'Sheriff',
  },
  {
    name: 'Uzi',
    image: uzi,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.UZI,
    variationText: 'Uzi',
  },
  {
    name: 'Shorty',
    image: shorty,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.SHORTY,
    variationText: 'Shorty',
  },
  {
    name: 'P90',
    image: p90,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.P90,
    variationText: 'P90',
  },
  {
    name: 'AKA47',
    image: aka47,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.AKA47,
    variationText: 'AKA47',
  },
  {
    name: 'Skar',
    image: skar,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.SKAR,
    variationText: 'Skar',
  },
  {
    name: 'Barret',
    image: barret,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.BARRET,
    variationText: 'Barret',
  },
  {
    name: 'Grenade Launcher',
    image: grenadeLauncher,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.GRENADE_LAUNCHER,
    variationText: 'Grenade Launcher',
  },
  {
    name: 'Bazooka',
    image: bazooka,
    nftType: NFTs.WEAPON,
    variation: WEAPONS.BAZOOKA,
    variationText: 'Bazooka',
  },
];

export default weapons;
