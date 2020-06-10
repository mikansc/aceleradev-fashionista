import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <article className="product">
      <div className="product__image">
        <Link to="/product">
          <img src="/assets/images/20002605_615_catalog_1.jpg " alt="" />
          <span className="product__discount">-12%</span>
        </Link>
      </div>
      <div className="product__desc">
        <Link to="/product">
          <h3 className="product__title">Vestido Transpasse bow</h3>
        </Link>
        <p className="product__price product__price--old">R$ 139,90</p>
        <p className="product__price">R$ 119,90</p>
      </div>
    </article>
  );
};

export default Product;
