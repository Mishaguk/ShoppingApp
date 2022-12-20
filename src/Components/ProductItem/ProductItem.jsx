import styles from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import * as operations from '../../redux/shop/cart/cartOperations';
import Modal from '../Modal/Modal';
import toastr from 'toastr';
import { getProducts } from '../../redux/shop/catalog/catalogSelector';
const ProductItem = ({
  name,
  img,
  price,
  manufacturer,
  description,
  id,
  onClickModal,
  onClickId,
}) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      operations.addProduct({
        id,
        name,
        img,
        price,
        manufacturer,
        description,
      })
    );
  };

  return (
    <main>
      <div className={styles.card}>
        <div className={styles.card__title}>
          <h3>New products</h3>
        </div>
        <div className={styles.card__body}>
          <div className={styles.half}>
            <div className={styles.featured_text}>
              <h1>{manufacturer}</h1>
              <p className={styles.sub}>{name}</p>
              <p className={styles.price}>{price}</p>
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
      </div>
    </main>
  );
};

export default ProductItem;
