// Dependencies
import React, { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

// Router
import Router from './Router';

const App: React.FC = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
      enableWeb3({ provider: 'metamask' });
    }
  }, [isAuthenticated, isWeb3Enabled]);

  return <Router />;
};

export default App;
