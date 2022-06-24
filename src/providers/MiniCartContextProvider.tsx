// Dependencies
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Types
import { NFTs } from '../typings/types.d';

// Utils
import requestAccount from '../utils/requestAccount';

// Custom Hooks
import useProvider from '../hooks/useProvider';
import useBUSDToken from '../hooks/useBUSDToken';
import useToysLegendNFTSale from '../hooks/useToysLegendNFTSale';

export interface Item {
  name: string;
  nftType: NFTs;
  price: number;
  quantity: number;
  variation?: number;
}

interface ItemAndIndex {
  item: Item;
  index: number;
}

export interface Land {
  y: number;
  x: number;
  position: number;
}

interface LandsToBuyFromPixel extends Omit<Land, 'position'> {
  positions: number[];
}

interface Context {
  items: Item[];
  lands: Land[];
  total: number;
  addItem(newItem: Item): void;
  addLand(newLand: Land): void;
  executeBuyTransactions(): void;
  removeItem(index: number): void;
  removeLand(landToRemove: Land): void;
  updateItem(newItem: ItemAndIndex): void;
  getQuantity(item: Pick<Item, 'nftType' | 'variation'>): number;
}

export const MiniCartContext = React.createContext<Partial<Context>>({});

const MiniCartContextProvider: React.FC = ({ children }) => {
  const busd = useBUSDToken();
  const provider = useProvider();
  const [totalItems, setTotalItems] = useState(0);
  const [totalLands, setTotalLands] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [lands, setLands] = useState<Land[]>([]);
  const toysLegendNFTSale = useToysLegendNFTSale();

  const total = totalItems + totalLands;

  function getItemsToBuy() {
    return items.map(({ quantity, nftType, variation }) => ({
      quantity,
      nft: nftType,
      variation: variation as number,
    }));
  }

  function getLandsToBuy() {
    return lands.reduce((arr, land) => {
      const index = arr.findIndex((pixel) => {
        return pixel.x === land.x && pixel.y === land.y;
      });

      if (index === -1) {
        const pixel: LandsToBuyFromPixel = {
          x: land.x,
          y: land.y,
          positions: [land.position],
        };

        arr.push(pixel);
      } else {
        const pixel = arr[index];

        const positions = [...pixel.positions, land.position];

        pixel['positions'] = positions;
      }

      return arr;
    }, [] as LandsToBuyFromPixel[]);
  }

  function addItem(newItem: Item) {
    const newItems = [...items];

    newItems.push(newItem);

    setItems(newItems);
  }

  function addLand(newLand: Land) {
    const newLands = [...lands];

    newLands.push(newLand);

    setLands(newLands);
  }

  function updateItem({ index, item }: ItemAndIndex) {
    const newItems = [...items];

    newItems[index] = item;

    setItems(newItems);
  }

  function removeItem(index: number) {
    const newItems = items.filter((_, i) => i !== index);

    setItems(newItems);
  }

  function removeLand(landToRemove: Land) {
    const newLands = lands.filter((land) => {
      if (
        land.x === landToRemove.x &&
        land.y === landToRemove.y &&
        land.position === landToRemove.position
      ) {
        return false;
      }

      return true;
    });

    setLands(newLands);
  }

  function getQuantity({ nftType, variation }: Item) {
    const { quantity = 0 } =
      items.find((item) => {
        return item.nftType === nftType && item.variation === variation;
      }) ?? {};

    return quantity;
  }

  async function executeBuyItemsTransaction(
    toysLegendNFTSaleSigner: typeof toysLegendNFTSale
  ) {
    const buyItemsTx = await toysLegendNFTSaleSigner.buyItems(getItemsToBuy());

    await buyItemsTx.wait();
  }

  async function executeBuyLandsTransaction(
    toysLegendNFTSaleSigner: typeof toysLegendNFTSale
  ) {
    const buyLandsTx = await toysLegendNFTSaleSigner.buyLands(getLandsToBuy());

    await buyLandsTx.wait();
  }

  async function executeBuyTransactions() {
    await requestAccount();

    const wallet = provider.getSigner();

    const busdSigner = busd.connect(wallet);
    const toysLegendNFTSaleSigner = toysLegendNFTSale.connect(wallet);

    const increaseAllowanceTx = await busdSigner.approve(
      toysLegendNFTSale.address,
      ethers.utils.parseEther(total.toString())
    );

    await increaseAllowanceTx.wait();

    if (items.length > 0) {
      await executeBuyItemsTransaction(toysLegendNFTSaleSigner);
    }

    if (lands.length > 0) {
      await executeBuyLandsTransaction(toysLegendNFTSaleSigner);
    }

    setItems([]);
    setLands([]);
  }

  useEffect(() => {
    if (items.length === 0 && totalItems > 0) {
      setTotalItems(0);

      return;
    }

    if (items.length === 0) return;

    async function getTotal() {
      const totalBigNumber = await toysLegendNFTSale.getTotalPriceFromItems(
        getItemsToBuy()
      );

      const newTotal = +ethers.utils.formatEther(totalBigNumber);

      setTotalItems(newTotal);
    }

    getTotal();
  }, [items]);

  useEffect(() => {
    if (lands.length === 0 && totalLands > 0) {
      setTotalLands(0);

      return;
    }

    if (lands.length === 0) return;

    async function getTotal() {
      const totalBigNumber = await toysLegendNFTSale.getTotalPriceFromLands(
        getLandsToBuy()
      );

      const newTotal = +ethers.utils.formatEther(totalBigNumber);

      setTotalLands(newTotal);
    }

    getTotal();
  }, [lands]);

  return (
    <MiniCartContext.Provider
      value={{
        items,
        lands,
        total,
        addItem,
        addLand,
        updateItem,
        removeItem,
        removeLand,
        getQuantity,
        executeBuyTransactions,
      }}
    >
      {children}
    </MiniCartContext.Provider>
  );
};

export default MiniCartContextProvider;
