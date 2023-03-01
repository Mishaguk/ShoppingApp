import * as actions from './cartActions';

export const addProduct = (product) => (dispatch) => {
  dispatch(actions.addProduct(product));
};

export const deleteCartItem = (item) => (dispatch) => {
  dispatch(actions.deleteCartItem(item));
};
export const increment = (id) => (dispatch) => {
  dispatch(actions.increment(id));
};
export const decrement = (id) => (dispatch) => {
  dispatch(actions.decrement(id));
};
