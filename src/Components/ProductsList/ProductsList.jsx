import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/shop/catalog/catalogSelector';
import { getFilter } from '../../redux/shop/catalog/catalogSelector';
import ProductItem from '../ProductItem/ProductItem';
import './ProductsList.css';

const ProductsList = ({ updateModal, getId }) => {
  const filter = useSelector(getFilter);
  const products = useSelector(getProducts(filter));

  return (
    <ul>
      {products.map((product) => (
        <ProductItem
          {...product}
          key={product.id}
          onClickModal={updateModal}
          onClickId={getId}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
