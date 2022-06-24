// Dependencies
import { useContext } from 'react';

// Context
import { MiniCartContext } from '../providers/MiniCartContextProvider';

export default function useMiniCartContext() {
  return useContext(MiniCartContext);
}
