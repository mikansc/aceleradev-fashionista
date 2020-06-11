import React from 'react';

import {} from '../../redux/actions/';

const ProductDetail = (props) => {
  console.log('ProductDetail:', props.location.state);
  const {
    name,
    image,
    regular_price,
    actual_price,
    on_sale,
    discount_percentage,
  } = props.location.state;
  return (
    <section className="product-detail">
      <div className="container">
        <div className="product-detail__image">
          <img src={image} alt={name} />
          {on_sale && (
            <span className="product-detail__discount">
              -{discount_percentage}
            </span>
          )}
        </div>
        <div className="product-detail__desc">
          <div className="product-detail__header">
            <h1 className="product-detail__title">{name}</h1>
            {on_sale && (
              <p className="product__price product__price--old">
                {regular_price}
              </p>
            )}
            <p className="product__price">
              {actual_price}
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
