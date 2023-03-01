import styles from './ProductItem.module.scss';
import { useDispatch } from 'react-redux';
import * as operations from '../../redux/shop/cart/cartOperations';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../redux/shop/cart/cartSelector';

const ProductItem = ({
  name,
  img,
  price,
  manufacturer,
  description,
  id,
  onClickModal,
  onClickId,
  amount,
}) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    amount = amount + 1;
    dispatch(
      operations.addProduct({
        id,
        name,
        img,
        price,
        manufacturer,
        description,
        amount,
      })
    );
  };

  return (
    <li className={styles.item}>
      <div className={styles.card__title}>
        <h3>New products</h3>
      </div>

      <div className={styles.card__body}>
        <div className={styles.featuredText}>
          <h1>{manufacturer}</h1>
          <div className={styles.tooltip}>
            <p className={styles.sub}>{name}</p>
            <span className={styles.tooltipText}>{name}</span>
          </div>
          <p className={styles.price}>{price}$</p>
        </div>

        <div className={styles.image}>
          <img
            onClick={() => {
              onClickModal();
              onClickId(id);
            }}
            src={img}
            alt="img"
          />
        </div>
      </div>

      <div className={styles.half}>
        <div className={styles.description}>
          <p>{description}</p>
        </div>

        <div className={styles.card__footer}>
          <span className={styles.stock}>In stock</span>
          <div className={styles.action}>
            <button
              type="button"
              className={styles.button}
              onClick={handleClick}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
