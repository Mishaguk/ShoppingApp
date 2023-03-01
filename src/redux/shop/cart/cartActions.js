import { createAction } from '@reduxjs/toolkit';

export const addProduct = createAction('cart/addProduct');

export const deleteCartItem = createAction('cart/deleteSucces');

export const increment = createAction('cart/increment');
export const decrement = createAction('cart/decrement');
