import CartItem from '../СartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from '../../redux/shop/cart/cartSelector';
import { useCallback } from 'react';
import * as operations from '../../redux/shop/cart/cartOperations';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import animations from './CartListAnimations.module.css';

import styles from './CartList.module.css';

const CartList = ({ updateModal, getId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  console.log(cartItems);
  const handleDelete = useCallback(
    (id) => dispatch(operations.deleteCartItem(id)),
    [dispatch]
  );

  return (
    <TransitionGroup className={styles.cartItemsList} component="ul">
      {cartItems.map((item) => (
        <CSSTransition key={item.id} timeout={300} classNames={animations}>
          <CartItem
            {...item}
            onDelete={handleDelete}
            onClickModal={updateModal}
            onClickId={getId}
            key={item.id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default CartList;
