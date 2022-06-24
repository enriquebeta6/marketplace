// Dependencies
import React from 'react';

// Style
import './Sidebar.scss';

const Sidebar: React.FC = ({ children }) => (
  <aside className='sidebar'>{children}</aside>
);

export default Sidebar;
