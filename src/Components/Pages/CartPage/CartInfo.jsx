import styles from './CartPage.module.css';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../redux/shop/cart/cartSelector';

const CartInfo = () => {
  const cartItems = useSelector(getCartItems);

  const totalPrice = cartItems.reduce(
    (acc, currentItem) => acc + currentItem.price * currentItem.amount,
    0
  );
  const totalAmount = cartItems.reduce(
    (acc, currentItem) => acc + currentItem.amount,
    0
  );
  return (
    <div className={styles.goodsInfoContainer}>
      <span className={styles.totalPrice}>
        <h4 className={styles.goodsInfoText}>Total price : {totalPrice}$</h4>
      </span>

      <span className={styles.totalGoods}>
        <h4 className={styles.goodsInfoText}>Total goods : {totalAmount}</h4>
      </span>
    </div>
  );
};
export default CartInfo;
