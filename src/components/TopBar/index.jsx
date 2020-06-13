import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import BagIcon from './BagIcon';
import Logo from './Logo.jsx';
import SearchIcon from './SearchIcon';
import { Search } from '../';

import Bag from '../Bag';

import { Drawer } from '@material-ui/core';

const TopBar = ({ shoppingBag }) => {
  const [searchBarStatus, setsearchBarStatus] = useState(false);
  const [bagBarStatus, setBagBarStatus] = useState(false);

  const toggleSearchBar = (value) => {
    setsearchBarStatus(!searchBarStatus);
  };
  const toggleBagBar = (value) => {
    setBagBarStatus(!bagBarStatus);
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
            <Link to="/shopping-bag">
              <BagIcon count={shoppingBag.itemCounter} />
            </Link>
            {/* <button onClick={toggleBagBar}>Clicaae</button>
            <Drawer anchor="right" open={bagBarStatus} onClose={toggleBagBar}>
              <Bag />
            </Drawer> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
