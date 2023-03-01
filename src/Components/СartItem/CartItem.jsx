import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonGroup } from '@mui/material';
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
  onIncrement,
  onDecrement,
  amount,
}) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.item}>
      <div className={styles.goodsCounter}></div>
      <div className={styles.card__remove}>
        <div className={styles.goodsCounter}>
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button onClick={() => onDecrement(id)}>-1</Button>
            <Button onClick={() => onIncrement(id)}>+1</Button>
          </ButtonGroup>
          <span className={styles.amountText}>x{amount}</span>
        </div>
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
