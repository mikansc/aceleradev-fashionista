import React from 'react';
import { Loading, BagItem } from '../';

const ShoppingBag = ({ shoppingBag, addToBag, removeFromBag }) => {
  console.log('Shopping Bag:', shoppingBag);
  return (
    <section className="shopping-cart">
      <div className="container">
        <h2 className="shopping-cart__title">Carrinho de compras</h2>
        {shoppingBag.length < 1 ? (
          <p>Não há produtos para exibir no carrinho de compras.</p>
        ) : (
          shoppingBag.map((item) => (
            <BagItem key={item.sku} item={item} removeFromBag={removeFromBag} />
          ))
        )}
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
