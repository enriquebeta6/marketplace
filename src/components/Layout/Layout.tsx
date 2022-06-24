// Dependencies
import React from 'react';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
