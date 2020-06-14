import React from 'react';

const SearchResultItem = ({ productData }) => {
  return (
    <article className="shopping-cart__item">
      <div className="col-6 shopping-cart__thumb">
        <img
          className="product__image"
          src={productData.image}
          alt={productData.name}
        />
      </div>
      <div className="col-6">
        <h3 className="product__title">{productData.name}</h3>
      </div>
    </article>
  );
};

export default SearchResultItem;
