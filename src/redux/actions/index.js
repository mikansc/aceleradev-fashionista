import axios from 'axios';

export const ADD_TO_BAG = 'ADD_TO_BAG';
export const REMOVE_FROM_BAG = 'REMOVE_FROM_BAG';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export function addToBag() {
  return {
    type: ADD_TO_BAG,
    payload: 'Add to bag',
  };
}

export function removeFromBag(id) {
  return {
    type: REMOVE_FROM_BAG,
    payload: `Remove the product sku ${id} from bag`,
  };
}

function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
}

export function fetchData() {
  return function (dispatch) {
    return axios
      .get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((data) => dispatch(setProducts(data)));
  };
}
