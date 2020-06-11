import { ADD_TO_BAG, REMOVE_FROM_BAG, SET_PRODUCTS } from '../actions';

import mock from '../../assets/mock.json';
import cartmock from '../../assets/cartmock.json';

const initialState = {
  shoppingBag: cartmock,
  products: mock,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_BAG:
      return { ...state, shoppingBag: action.payload };
    case REMOVE_FROM_BAG:
      const { shoppingBag } = state;
      const newShoppingBag = shoppingBag.filter(
        (item) => item.sku !== action.payload
      );

      return { ...state, shoppingBag: newShoppingBag };
    default:
      return state;
  }
};

export default shopReducer;
