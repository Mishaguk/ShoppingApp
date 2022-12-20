import { configureStore } from '@reduxjs/toolkit';
import catalog from './shop/catalog/catalogReducer';
import cart from './shop/cart/cartReducer';

export const store = configureStore({
  reducer: {
    catalog: catalog,
    cart: cart,
  },
});
