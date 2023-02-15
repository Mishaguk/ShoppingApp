import ProductsList from '../../ProductsList/ProductsList';
import './ProductsPage.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../redux/shop/catalog/catalogSelector';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import '../ProductsPage/ProductsPage.css';

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
  console.log(productsItems);
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
      ) : (
        ''
      )}

      <ProductsList updateModal={updateModal} getId={getId} />
    </div>
  );
};

export default ProductsPage;
