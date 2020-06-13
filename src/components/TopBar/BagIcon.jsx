import React from 'react';
import { Link } from 'react-router-dom';

const BagIcon = ({ count }) => {
  return (
    <div className="topbar__shoppingCart">
      <Link to="/shopping-bag">
        <img
          className="topbar__icon"
          src="/assets/images/icons/shopping-bag-line.svg"
          alt="Search"
        />
        {count > 0 && (
          <span className="topbar__counter">
            {String(count).padStart(2, '0')}
          </span>
        )}
      </Link>
    </div>
  );
};

export default BagIcon;
