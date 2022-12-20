import styles from './Modal.module.css';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/shop/catalog/catalogSelector';
import { CSSTransition } from 'react-transition-group';
import animations from './ModalAnimations.module.css';
import { getFilter } from '../../redux/shop/catalog/catalogSelector';
import React from 'react';
import { useState } from 'react';

const Modal = ({ show, id, onClose }) => {
  const filter = useSelector(getFilter);
  const products = useSelector(getProducts(filter));

  const productById = products.find((item) => item.id === id);
  if (!show) {
    setTimeout(() => {
      return;
    });
  }
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent}>
        <img src={productById.img} onClick={onClose} />
      </div>
    </div>
  );
};

export default Modal;
