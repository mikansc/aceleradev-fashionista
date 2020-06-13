import React from 'react';

const SizeButton = ({ size, onClickEvent, selected }) => {
  console.log(selected);
  return (
    <button
      value={size.sku}
      className={`product-detail__size  ${
        selected && 'product-detail__size--selected'
      }`}
      onClick={(event) => onClickEvent(event)}
    >
      {size.size}
    </button>
  );
};

export default SizeButton;
