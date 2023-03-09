import ProductsList from '../../ProductsList/ProductsList';
import styles from './ProductsPage.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/shop/catalog/catalogSelector';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const ProductsPage = () => {
  const productsItems = useSelector(getProducts());
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);

  const productItemById = productsItems.find((item) => item.id === productId);

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
      {productItemById ? (
        <div className={styles.modal}>
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
                <img src={productItemById.img}></img>
              </Box>
            </Fade>
          </Modal>
        </div>
      ) : (
        ''
      )}

      <ProductsList updateModal={updateModal} getId={getId} />
    </div>
  );
};

export default ProductsPage;
