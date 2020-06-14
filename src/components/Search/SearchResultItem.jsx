import React from 'react';
import { Link } from 'react-router-dom';
import { createSlug } from '../../utils';

const SearchResultItem = ({ productData }) => {
  const slug = createSlug(productData.name);
  return (
    <Link
      to={{
        pathname: `/product/${slug}`,
        state: productData,
      }}
    >
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
    </Link>
  );
};

export default SearchResultItem;
