import React from 'react';

const BagIcon = ({ count }) => {
  return (
    <div className="topbar__shoppingCart">
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
    </div>
  );
};

export default BagIcon;
