import React, { useState } from 'react';

import {} from '../../utils';

const ProductDetail = (props) => {
  // const { addToBag } = props;
  // console.log(addToBag);
  const [quantity, setQuantity] = useState(1);

  console.log('Ação do state no productDetail: ', props);

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
    const prod = props.location.state;
    console.log('Add To Cart:', quantity, prod);
    props.addToBag(prod, quantity);
  };

  const {
    name,
    image,
    regular_price,
    actual_price,
    on_sale,
    discount_percentage,
  } = props.location.state;
  let fixImage = image || '/assets/images/20002605_615_catalog_1.jpg';

  return (
    <section className="product-detail">
      <div className="container">
        <div className="product-detail__image">
          <img src={fixImage} alt={name} />
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
