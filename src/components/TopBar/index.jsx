import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BagIcon from './BagIcon';
import Logo from './Logo.jsx';
import SearchIcon from './SearchIcon';
import { Search } from '../';

import { Drawer } from '@material-ui/core';

const TopBar = ({ shoppingBag }) => {
  const [searchBarStatus, setsearchBarStatus] = useState(false);

  const toggleSearchBar = (value) => {
    setsearchBarStatus(!searchBarStatus);
  };

  return (
    <>
      <header className="topbar">
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
          <div className="topbar__icons">
            <SearchIcon toggleSearchBar={toggleSearchBar} />
            <Drawer
              anchor="right"
              open={searchBarStatus}
              onClose={toggleSearchBar}
            >
              <Search />
            </Drawer>
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
