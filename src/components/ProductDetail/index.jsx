import React from 'react';

import {} from '../../redux/actions/';

const ProductDetail = ({ product, setQuantity, setSize }) => {
  return (
    <section className="product-detail">
      <div className="container">
        <div className="product-detail__image">
          <img src="/assets/images/20002605_615_catalog_1.jpg " alt="" />
          <span className="product-detail__discount">-12%</span>
        </div>
        <div className="product-detail__desc">
          <div className="product-detail__header">
            <h1 className="product-detail__title">Vestido Transpasse bow</h1>
            <p className="product__price product__price--old">R$ 139,90</p>
            <p className="product__price">
              R$ 119,90
              <span className="product-detail__installments">
                em até 3x R$ 99,99
              </span>
            </p>
          </div>
          <p className="product-detail__options">Escolha o tamanho:</p>
          <button className="product-detail__size">P</button>
          <button className="product-detail__size">M</button>
          <button className="product-detail__size">G</button>

          <div className="product-detail__controls">
            <p className="product-detail__options">Quantidade:</p>
            <div className="product-detail__counter">
              <button>
                <img
                  className="product-detail__count"
                  src="/assets/images/icons/plus-circle.svg"
                  alt="Plus"
                />
              </button>
              <span className="product-detail_quantity">01</span>
              <button>
                <img
                  className="product-detail__count"
                  src="/assets/images/icons/minus-circle.svg"
                  alt="Minus"
                />
              </button>
            </div>
            <button className="button-action">Adicionar à sacola</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
