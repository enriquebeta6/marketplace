// Dependencies
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';
import ScrollTop from './components/ScrollTop/ScrollTop';

// Pages
import NFTSale from './pages/NFTSale/NFTSale';
import Skins from './pages/Skins/Skins';
import Character from './pages/Character/Character';
import Weapons from './pages/Weapons/Weapons';
import Cards from './pages/Cards/Cards';
import Establishments from './pages/Establishments/Establishments';
import Lands from './pages/Lands/Lands';
import LandDetails from './pages/LandDetails/LandDetails';
import Dashboard from './pages/Dashboard';

const Router: React.FC = () => (
  <HashRouter>
    <Layout>
      <ScrollTop />

      <Routes>
        <Route path='nft-sale' element={<NFTSale />} />
        <Route path='nft-sale/lands' element={<Lands />} />
        <Route path='nft-sale/lands/:y/:x' element={<LandDetails />} />
        <Route path='nft-sale/character' element={<Character />} />
        <Route path='nft-sale/skins' element={<Skins />} />
        <Route path='nft-sale/weapons' element={<Weapons />} />
        <Route path='nft-sale/cards' element={<Cards />} />
        <Route path='nft-sale/establishments' element={<Establishments />} />

        <Route path='dashboard/' element={<Dashboard />} />

        <Route path='*' element={<Navigate replace to='nft-sale' />} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default Router;
