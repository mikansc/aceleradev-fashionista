import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  console.log(product);
  const { name, image, actual_price, on_sale, discount_percentage } = product;
  return (
    <article className="product">
      <div className="product__image">
        <Link to="/product">
          {!image ? (
            <img src="/assets/images/20002605_615_catalog_1.jpg " alt="" />
          ) : (
            <img src={image} alt={name} />
          )}
          {on_sale && (
            <span className="product__discount">-{discount_percentage}</span>
          )}
        </Link>
      </div>
      <div className="product__desc">
        <Link to="/product">
          <h3 className="product__title">{name}</h3>
        </Link>
        {on_sale && (
          <p className="product__price product__price--old">R$ 139,90</p>
        )}
        <p className="product__price">R$ {actual_price}</p>
      </div>
    </article>
  );
};

export default Product;
