import { createReducer } from '@reduxjs/toolkit';
import * as actions from './cartActions';
import toastr from 'toastr';
const initalState = {
  items: [],
};

const addProduct = (state, action) => {
  const product = state.find((item) => item.id === action.payload.id);
  console.log(product);
  if (!product) {
    toastr.success(`You added ${action.payload.name} to your cart `);
    return [...state, action.payload];
  } else {
    toastr.info('You already added this product to cart');
  }
};
const deleteCartItem = (state, action) =>
  state.filter((item) => item.id !== action.payload);

const cart = createReducer(initalState.items, {
  [actions.addProductSucces]: addProduct,
  [actions.deleteCartItem]: deleteCartItem,
});

export default cart;
