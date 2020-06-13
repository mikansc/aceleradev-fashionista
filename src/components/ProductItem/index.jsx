import React from 'react';
import { Link } from 'react-router-dom';

import { createSlug } from '../../utils';

const Product = ({ product }) => {
  const {
    name,
    image,
    actual_price,
    on_sale,
    discount_percentage,
    regular_price,
  } = product;
  let fixImage = image || '/assets/images/20002605_615_catalog_1.jpg';

  const slug = createSlug(name);
  return (
    <article className="product">
      <div className="product__image">
        <Link
          to={{
            pathname: `/product/${slug}`,
            state: product,
          }}
        >
          <img src={fixImage} alt={name} />
          {on_sale && (
            <span className="product__discount">
              -{discount_percentage} off
            </span>
          )}
        </Link>
      </div>
      <div className="product__desc">
        <Link
          to={{
            pathname: `/product/${slug}`,
            state: product,
          }}
        >
          <h3 className="product__title">{name}</h3>
        </Link>
        {on_sale && (
          <p className="product__price product__price--old">{regular_price}</p>
        )}
        <p className="product__price">{actual_price}</p>
      </div>
    </article>
  );
};

export default Product;
