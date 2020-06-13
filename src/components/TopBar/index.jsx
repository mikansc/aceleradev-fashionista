import React from 'react';
import { Link } from 'react-router-dom';

import BagIcon from './BagIcon';
import Logo from './Logo.jsx';
import SearchIcon from './SearchIcon';
import ShoppingBag from '../ShoppingBag';

const TopBar = ({ shoppingBag }) => {
  return (
    <>
      <header className="topbar">
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
          <div className="topbar__icons">
            <SearchIcon />
            <BagIcon count={shoppingBag.itemCounter} />
          </div>
        </div>
      </header>

      <div>
        Top Bar
        <Link to="/shopping-bag"></Link>
        <Link to="/">HOme</Link>
      </div>
    </>
  );
};

export default TopBar;
