import * as actions from './cartActions';

export const addProduct = (product) => (dispatch) => {
  dispatch(actions.addProductSucces(product));
};

export const deleteCartItem = (item) => (dispatch) => {
  dispatch(actions.deleteCartItem(item));
};
