// Dependencies
import React from 'react';

// Components
import Header from '../Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default Layout;
