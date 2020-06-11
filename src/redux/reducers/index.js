import { ADD_TO_BAG, REMOVE_FROM_BAG, SET_PRODUCTS } from '../actions';

import mock from '../../assets/mock.json';
import cartmock from '../../assets/cartmock.json';

const initialState = {
  shoppingBag: [],
  products: mock,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_BAG:
      const { product, quantity } = action.payload;
      const {
        name,
        installments,
        regular_price,
        actual_price,
        total_Price,
        image,
      } = product;
      const newProduct = {
        name,
        sku: '5807_343_0_PP',
        size: 'PP',
        quantity,
        installments,
        regular_price,
        actual_price,
        total_Price,
        image,
      };

      const newBag = [...state.shoppingBag, newProduct];
      console.log('Etacaraio', newBag);
      return { ...state, shoppingBag: newBag };
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
