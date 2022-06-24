// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { MoralisProvider } from 'react-moralis';
// import { DAppProvider, Hardhat, Config } from '@usedapp/core';

// Style
import './index.scss';

// Config
import moralisConfig from './config/moralis';

// Components
import App from './App';

// Utils
import reportWebVitals from './reportWebVitals';

// Providers
import MiniCartContextProvider from './providers/MiniCartContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider {...moralisConfig}>
      {/* <DAppProvider config={config}> */}
      <MiniCartContextProvider>
        <App />
      </MiniCartContextProvider>
      {/* </DAppProvider> */}
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
