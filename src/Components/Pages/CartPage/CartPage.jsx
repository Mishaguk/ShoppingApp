import styles from './CartPage.module.css';
import CartList from '../../CartList/CartList';
import { useSelector } from 'react-redux';
import { getCartItems } from '../../../redux/shop/cart/cartSelector';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const CartPage = () => {
  const cartItems = useSelector(getCartItems);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  const cartItemById = cartItems.find((item) => item.id === productId);
  if (cartItems.length !== 0) {
    setTimeout(() => {
      setIsEmptyCart(false);
    });
  } else if (cartItems.length === 0) {
    setTimeout(() => {
      setIsEmptyCart(true);
    }, 300);
  }
  const getId = (id) => {
    setProductId(id);
  };

  const updateModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      {cartItemById ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={showModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={showModal}>
            <Box sx={style}>
              <img src={cartItemById.img}></img>
            </Box>
          </Fade>
        </Modal>
      ) : (
        ''
      )}

      {isEmptyCart ? (
        <div className={styles.emptyCartContainer}>
          <p className={styles.emptyCart}>Your cart is empty!</p>
          <span className={styles.funnyText}>But you can change it :)</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/102/102661.png"
            className={styles.emptyCartImg}
          ></img>
        </div>
      ) : (
        <div>
          <div className={styles.totalyGoodsContainer}>
            <span className={styles.totalyGoodsText}>
              Totaly goods : {cartItems.length}
            </span>
          </div>
          <CartList updateModal={updateModal} getId={getId} />
        </div>
      )}
    </div>
  );
};
export default CartPage;
