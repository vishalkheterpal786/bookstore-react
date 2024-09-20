export const BASE_URL = 'http://localhost:8080/api';
export const CART_ENDPOINTS = {
  ADD_TO_CART: `${BASE_URL}/cart/addToCart`,
  GET_CART: `${BASE_URL}/cart/getCart`,
  CHECKOUT: `${BASE_URL}/cart/checkout`,
};
export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_URL}/customer/login`,
  REGISTER: `${BASE_URL}/customer/register`,
};
export const BOOK_ENDPOINTS = {
  GET_ALL_BOOKS: `${BASE_URL}/books/getAllBooks`,
};
