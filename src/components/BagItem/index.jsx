import React from 'react';

const BagItem = ({ item, removeFromBag, changeQuantity }) => {
  const { name, size, image, actual_price, installments, quantity, sku } = item;
  return (
    <article className="shopping-cart__item">
      <div className="col-4 shopping-cart__thumb">
        <img className="product__image" src={image} alt="Product" />
        <button
          onClick={() => removeFromBag(sku)}
          className="shopping-cart__remove"
        >
          Remover item
        </button>
      </div>
      <div className="col-6">
        <h3 className="product__title">{name}</h3>
        <p>Tam.: {size}</p>
        <div className="product-detail__counter">
          <button onClick={() => changeQuantity(sku, 'add')}>
            <img
              className="product-detail__count"
              src="/assets/images/icons/plus-circle.svg"
              alt="Plus"
            />
          </button>
          <span className="product-detail_quantity">{quantity}</span>
          <button onClick={() => changeQuantity(sku, 'sub')}>
            <img
              className="product-detail__count"
              src="/assets/images/icons/minus-circle.svg"
              alt="Minus"
            />
          </button>
        </div>
      </div>
      <div className="col-2">
        <p className="product__price">{actual_price}</p>
        <p className="product-detail__installments">{installments}</p>
      </div>
    </article>
  );
};

export default BagItem;
