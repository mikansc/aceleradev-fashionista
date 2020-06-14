import React, { useState, useEffect } from 'react';

import SizeButton from './SizeButton';

const ProductDetail = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {}, [selectedSize]);

  const handleSizeSelect = (event) => {
    const sku = event.target.value;
    setSelectedSize(sku);
  };

  const handleQuantity = (operation) => {
    if (operation === 'add') {
      setQuantity(quantity + 1);
    }
    if (operation === 'sub') {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
    }
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('Você precisa selecionar um tamanho.');
      return;
    }
    const sku = selectedSize;
    props.addToBag(sku, quantity);
  };

  const {
    name,
    image,
    regular_price,
    actual_price,
    on_sale,
    discount_percentage,
    sizes,
  } = props.location.state;
  let fixImage = image || '/assets/images/20002605_615_catalog_1.jpg';

  return (
    <section className="product-detail">
      <div className="container">
        <div className="product-detail__image">
          <img src={fixImage} alt={name} />
          {on_sale && (
            <span className="product-detail__discount">
              {' '}
              Promoção -{discount_percentage} off
            </span>
          )}
        </div>
        <div className="product-detail__desc">
          <div className="product-detail__header">
            <h1 className="product-detail__title">
              {name}
              {on_sale && (
                <span className="product-detail__installments">
                  {' '}
                  {'(promoção!)'}
                </span>
              )}
            </h1>
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
          {sizes
            .filter((item) => item.available === true)
            .map((size, idx) => (
              <SizeButton
                key={idx}
                size={size}
                selected={size.sku === selectedSize}
                onClickEvent={handleSizeSelect}
              />
            ))}

          <div className="product-detail__controls">
            <p className="product-detail__options">Quantidade:</p>
            <div className="product-detail__counter">
              <button onClick={() => handleQuantity('add')}>
                <img
                  className="product-detail__count"
                  src="/assets/images/icons/plus-circle.svg"
                  alt="Plus"
                />
              </button>
              <span className="product-detail_quantity">{quantity}</span>
              <button onClick={() => handleQuantity('sub')}>
                <img
                  className="product-detail__count"
                  src="/assets/images/icons/minus-circle.svg"
                  alt="Minus"
                />
              </button>
            </div>
            <button className="button-action" onClick={handleAddToBag}>
              Adicionar à sacola
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
