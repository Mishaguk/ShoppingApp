import ProductsList from '../../ProductsList/ProductsList';
import './ProductsPage.css';
import Modal from '../../Modal/Modal';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import animations from '../../Modal/ModalAnimations.module.css';

import '../ProductsPage/ProductsPage.css';

const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);

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
      <div className={`modal-background ${showModal ? 'show' : ''}`}>
        <CSSTransition
          in={showModal}
          classNames={animations}
          timeout={500}
          unmountOnExit
        >
          <Modal show={showModal} id={productId} onClose={handleClose} />
        </CSSTransition>
      </div>

      <ProductsList updateModal={updateModal} getId={getId} />
    </div>
  );
};

export default ProductsPage;
