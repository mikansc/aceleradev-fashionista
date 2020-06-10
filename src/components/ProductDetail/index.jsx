import React from 'react';

const ProductDetail = () => {
  return (
    <section class="product-detail">
      <div class="container">
        <div class="product-detail__image">
          <img src="/assets/images/20002605_615_catalog_1.jpg " alt="" />
          <span class="product-detail__discount">-12%</span>
        </div>
        <div div class="product-detail__desc">
          <div class="product-detail__header">
            <h1 class="product-detail__title">Vestido Transpasse bow</h1>
            <p class="product__price product__price--old">R$ 139,90</p>
            <p class="product__price">
              R$ 119,90
              <span class="product-detail__installments">
                em até 3x R$ 99,99
              </span>
            </p>
          </div>
          <p class="product-detail__options">Escolha o tamanho:</p>
          <button class="product-detail__size">P</button>
          <button class="product-detail__size">M</button>
          <button class="product-detail__size">G</button>

          <div class="product-detail__controls">
            <p class="product-detail__options">Quantidade:</p>
            <div class="product-detail__counter">
              <button>
                <img
                  class="product-detail__count"
                  src="/assets/images/icons/plus-circle.svg"
                  alt="Plus"
                />
              </button>
              <span class="product-detail_quantity">01</span>
              <button>
                <img
                  class="product-detail__count"
                  src="/assets/images/icons/minus-circle.svg"
                  alt="Minus"
                />
              </button>
            </div>
            <button class="button-action">Adicionar à sacola</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
