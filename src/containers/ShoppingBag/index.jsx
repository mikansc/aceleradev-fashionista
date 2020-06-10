import React from 'react';

const ShoppingBag = () => {
  return (
    <section class="shopping-cart">
      <div class="container">
        <h2 class="shopping-cart__title">Carrinho de compras</h2>
        <article class="shopping-cart__item">
          <div class="col-4 shopping-cart__thumb">
            <img
              class="product__image"
              src="/assets/images/20002605_615_catalog_1.jpg"
              alt="Product"
            />
            <span class="shopping-cart__remove">Remover item</span>
          </div>
          <div class="col-6">
            <h3 class="product__title">Vestido Traspasse Bow</h3>
            <p>Tam.: G</p>
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
          </div>
          <div class="col-2">
            <p class="product__price">R$ 119,90</p>
            <p class="product-detail__installments">3x R$ 99,99</p>
          </div>
        </article>
        <article class="shopping-cart__item">
          <div class="col-4 shopping-cart__thumb">
            <img
              class="product__image"
              src="/assets/images/20002605_615_catalog_1.jpg"
              alt="Product"
            />
            <span class="shopping-cart__remove">Remover item</span>
          </div>
          <div class="col-6">
            <h3 class="product__title">Vestido Traspasse Bow</h3>
            <p>Tam.: G</p>
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
          </div>
          <div class="col-2">
            <p class="product__price">R$ 119,90</p>
            <p class="product-detail__installments">3x R$ 99,99</p>
          </div>
        </article>
        <div class="shopping-cart__subtotal">
          <h4 class="shopping-cart__subtitle">Subtotal:</h4>
          <div class="shopping-cart__subvalue">
            <span>R$1.299,90</span>
          </div>
        </div>
        <button class="button-action">Finalizar pedido</button>
      </div>
    </section>
  );
};

export default ShoppingBag;
