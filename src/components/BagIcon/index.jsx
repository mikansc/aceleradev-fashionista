import React from 'react';
import { Link } from 'react-router-dom';

const BagIcon = () => {
  return (
    <div className="topbar__shoppingCart">
      <Link to="/shopping-bag">
        <img
          className="topbar__icon"
          src="/assets/images/icons/shopping-bag-line.svg"
          alt="Search"
        />
        <span className="topbar__counter">11</span>
      </Link>
    </div>
  );
};

export default BagIcon;
