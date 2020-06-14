import {
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  CHANGE_QUANTITY,
  SET_PRODUCTS,
  SEARCH,
} from '../actions/actionTypes';

import mock from '../../assets/mock.json';
import {
  bagValueTotalizer,
  bagItemsTotalizer,
  bagQuantityUpdate,
} from '../../utils';

const initialState = {
  shoppingBag: {
    bag: [],
    total: 0,
    itemCounter: 0,
  },
  products: [],
  search: {
    searchQuery: '',
    searchResult: [],
  },
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
      const removeFromBag = state.shoppingBag.bag.filter(
        (item) => item.sku !== payload
      );
      const updateRemoveItemCount = bagItemsTotalizer(removeFromBag);
      const updateRemoveTotal = bagValueTotalizer(removeFromBag);

      const updateRemovedBag = {
        ...state.shoppingBag,
        bag: removeFromBag,
        itemCounter: updateRemoveItemCount,
        total: updateRemoveTotal,
      };

      return { ...state, shoppingBag: updateRemovedBag };

    case CHANGE_QUANTITY:
      const updatedBag = state.shoppingBag.bag.map((item) => item);
      for (let item of updatedBag) {
        if (item.sku === payload.sku) {
          item.quantity = bagQuantityUpdate(item.quantity, payload.operation);
        }
      }
      const updateItemCount = bagItemsTotalizer(updatedBag);
      const updateTotal = bagValueTotalizer(updatedBag);

      const updateBagToState = {
        ...state.shoppingBag,
        bag: updatedBag,
        itemCounter: updateItemCount,
        total: updateTotal,
      };

      return {
        ...state,
        shoppingBag: updateBagToState,
      };

    case SEARCH:
      let searchResults = state.products.filter((product) =>
        product.name.toLowerCase().includes(payload.toLowerCase())
      );

      if (payload === '') {
        searchResults = [];
      }

      const newSearch = {
        searchResult: searchResults,
        searchQuery: payload,
      };

      return { ...state, search: newSearch };

    default:
      return state;
  }
};

export default shopReducer;
