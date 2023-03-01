import { createReducer } from '@reduxjs/toolkit';
import * as actions from './cartActions';
import toastr from 'toastr';
const initalState = {
  items: [],
};

const addProduct = (state, action) => {
  const product = state.find((item) => item.id === action.payload.id);

  if (!product) {
    toastr.success(
      `You added ${action.payload.manufacturer} ${action.payload.name} to your cart `
    );
    return [...state, action.payload];
  } else {
    toastr.info(`You have already added it to the cart`);
  }
};
const deleteCartItem = (state, action) =>
  state.filter((item) => item.id !== action.payload);

const increment = (state, action) => {
  const product = state.find((item) => item.id === action.payload);
  product.amount += 1;
};
const decrement = (state, action) => {
  const product = state.find((item) => item.id === action.payload);
  if (product.amount > 1) product.amount -= 1;
};

const cart = createReducer(initalState.items, {
  [actions.addProduct]: addProduct,
  [actions.deleteCartItem]: deleteCartItem,
  [actions.increment]: increment,
  [actions.decrement]: decrement,
});

export default cart;
