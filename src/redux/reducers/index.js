import {
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  SET_PRODUCTS,
} from '../actions/actionTypes';

import mock from '../../assets/mock.json';
import { bagValueTotalizer, bagItemsTotalizer } from '../../utils';

const initialState = {
  shoppingBag: {
    bag: [],
    total: 0,
    itemCounter: 0,
  },
  products: mock,
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };

    case ADD_TO_BAG:
      const { bag } = state.shoppingBag;

      const newBag = bag.map((item) => item);
      let newProduct = {};

      if (newBag.some((item) => item.sku === payload.sku)) {
        for (let item of newBag) {
          if (item.sku === payload.sku) {
            item.quantity = item.quantity + payload.quantity;
          }
        }
      } else {
        const selectedItem = state.products.find((product) =>
          product.sizes.some((size) => size.sku === payload.sku)
        );
        const findSize = selectedItem.sizes.find(
          (size) => size.sku === payload.sku
        );
        const { size: foundSize, sku: foundSku } = findSize;

        newProduct = {
          name: selectedItem.name,
          sku: foundSku,
          size: foundSize,
          quantity: payload.quantity,
          installments: selectedItem.installments,
          regular_price: selectedItem.regular_price,
          actual_price: selectedItem.actual_price,
          image: selectedItem.image,
        };
        newBag.push(newProduct);
      }

      const newItemCount = bagItemsTotalizer(newBag);
      const newTotal = bagValueTotalizer(newBag);

      const newBagToState = {
        ...state.shoppingBag,
        bag: newBag,
        itemCounter: newItemCount,
        total: newTotal,
      };

      return {
        ...state,
        shoppingBag: newBagToState,
      };

    case REMOVE_FROM_BAG:
      // const { shoppingBag } = state;
      // const newShoppingBag = shoppingBag.filter((item) => item.sku !== payload);
      // return { ...state, shoppingBag: newShoppingBag };
      return;

    default:
      return state;
  }
};

export default shopReducer;
