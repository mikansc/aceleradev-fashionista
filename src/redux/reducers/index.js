import { ADD_TO_BAG, REMOVE_FROM_BAG, SET_PRODUCTS } from '../actions';

import mock from '../../assets/mock.json';

const initialState = {
  shoppingBag: [
    {
      name: 'VESTIDO TRANSPASSE BOW',
      sku: '5807_343_0_PP',
      size: 'PP',
      quantity: 5,
      installments: '3x R$ 66,63',
      regular_price: 'R$ 199,90',
      actual_price: 'R$ 199,90',
      image:
        'https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg',
    },
    {
      name: 'REGATA ALCINHA FOLK',
      sku: '5723_40130843_0_M',
      size: 'M',
      quantity: 2,
      installments: '3x R$ 33,30',
      regular_price: 'R$ 99,90',
      actual_price: 'R$ 99,90',
      image:
        'https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg',
    },
  ],
  products: mock,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ADD_TO_BAG:
      // return { ...state, shoppingBag: action.payload };
      console.log(action.payload);
      return;
    case REMOVE_FROM_BAG:
      // return { ...state, shoppingBag: action.payload };
      console.log(action.payload);
      return;
    default:
      return state;
  }
};

export default shopReducer;
