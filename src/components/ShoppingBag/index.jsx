import React from 'react';

const ShoppingBag = () => {
  return (
    <section className="shopping-cart">
      <div className="container">
        <h2 className="shopping-cart__title">Carrinho de compras</h2>
        <article className="shopping-cart__item">
          <div className="col-4 shopping-cart__thumb">
            <img
              className="product__image"
              src="/assets/images/20002605_615_catalog_1.jpg"
              alt="Product"
            />
            <span className="shopping-cart__remove">Remover item</span>
          </div>
          <div className="col-6">
            <h3 className="product__title">Vestido Traspasse Bow</h3>
            <p>Tam.: G</p>
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
          </div>
          <div className="col-2">
            <p className="product__price">R$ 119,90</p>
            <p className="product-detail__installments">3x R$ 99,99</p>
          </div>
        </article>
        <article className="shopping-cart__item">
          <div className="col-4 shopping-cart__thumb">
            <img
              className="product__image"
              src="/assets/images/20002605_615_catalog_1.jpg"
              alt="Product"
            />
            <span className="shopping-cart__remove">Remover item</span>
          </div>
          <div className="col-6">
            <h3 className="product__title">Vestido Traspasse Bow</h3>
            <p>Tam.: G</p>
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
          </div>
          <div className="col-2">
            <p className="product__price">R$ 119,90</p>
            <p className="product-detail__installments">3x R$ 99,99</p>
          </div>
        </article>
        <div className="shopping-cart__subtotal">
          <h4 className="shopping-cart__subtitle">Subtotal:</h4>
          <div className="shopping-cart__subvalue">
            <span>R$1.299,90</span>
          </div>
        </div>
        <button className="button-action">Finalizar pedido</button>
      </div>
    </section>
  );
};

export default ShoppingBag;
