import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import * as operations from '../../redux/shop/cart/cartOperations';
const CartItem = ({
  name,
  img,
  price,
  manufacturer,
  description,
  onDelete,
  id,
  onClickModal,
  onClickId,
}) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <div className={styles.card__remove}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
      </div>
      <div className={styles.card__body}>
        <div className={styles.half}>
          <div className={styles.featured__text}>
            <h1>{manufacturer}</h1>
            <div className={styles.tooltip}>
              <p className={styles.sub}>{name}</p>
              <span className={styles.tooltipText}>{name}</span>
            </div>
            <p className={styles.price}>{price}$</p>
          </div>
        </div>
        <div className={styles.image}>
          <img
            onClick={() => {
              onClickModal();
              onClickId(id);
            }}
            src={img}
          />
        </div>
      </div>
      <div className={styles.half}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>

        <div className={styles.card__footer}>
          <div className={styles.action}>
            <Button variant="contained" color="success">
              Take order
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
