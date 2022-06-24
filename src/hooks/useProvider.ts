// Dependencies
import { ethers } from 'ethers';

const { REACT_APP_RPC_URL } = process.env;
export default function useProvider() {
  // const provider = window.ethereum
  //   ? new ethers.providers.Web3Provider(window.ethereum)
  //   : new ethers.providers.JsonRpcProvider(REACT_APP_RPC_URL as string);

  const provider = new ethers.providers.JsonRpcProvider(
    REACT_APP_RPC_URL as string
  );

  return provider;
}
