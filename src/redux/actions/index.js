import axios from 'axios';
import {
  ADD_TO_BAG,
  REMOVE_FROM_BAG,
  CHANGE_QUANTITY,
  SET_PRODUCTS,
  SEARCH,
} from './actionTypes';

export function addToBag(sku, quantity) {
  return {
    type: ADD_TO_BAG,
    payload: { sku, quantity },
  };
}

export function removeFromBag(sku) {
  return {
    type: REMOVE_FROM_BAG,
    payload: sku,
  };
}

export function changeQuantity(sku, operation) {
  return {
    type: CHANGE_QUANTITY,
    payload: { sku, operation },
  };
}

export function searchProduct(query) {
  return {
    type: SEARCH,
    payload: query,
  };
}

export function fetchData() {
  return function (dispatch) {
    return axios
      .get('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog')
      .then((data) => dispatch(setProducts(data)));
  };
}

function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    payload: data,
  };
}
