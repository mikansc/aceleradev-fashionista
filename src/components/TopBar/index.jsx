import React from 'react';
import { Link } from 'react-router-dom';

import { Logo, SearchIcon, BagIcon } from '../';

const TopBar = () => {
  return (
    <>
      <header className="topbar">
        <div className="container">
          <Link to="/">
            <Logo />
          </Link>
          <div className="topbar__icons">
            <SearchIcon />
            <BagIcon />
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
