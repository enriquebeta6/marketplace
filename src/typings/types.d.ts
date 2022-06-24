export enum NFTs {
  LAND = 'LAND',
  CARD = 'CARD',
  SKIN = 'SKIN',
  TOY = 'TOY',
  WEAPON = 'WEAPON',
  MARKET = 'MARKET',
  BATTERY_FACTORY = 'BATTERY_FACTORY',
  MUNITION_FACTORY = 'MUNITION_FACTORY',
}

export interface NFTAndVariation {
  nftType: NFTs;
  variation: number;
}

export enum WEAPONS {
  GLOCK = 1,
  SHERIFF = 2,
  UZI = 3,
  SHORTY = 4,
  P90 = 5,
  AKA47 = 6,
  SKAR = 7,
  BARRET = 8,
  GRENADE_LAUNCHER = 9,
  BAZOOKA = 10,
}

export enum LANDS {
  BLUE = 1,
  CYAN = 2,
  GREEN = 3,
  ORANGE = 4,
  PINK = 5,
}

export enum MUNITION_FACTORY {
  COMMON = 1,
  PRO = 2,
  LEGENDARY = 3,
}

export enum BATTERY_FACTORY {
  COMMON = 1,
  PRO = 2,
  LEGENDARY = 3,
}
