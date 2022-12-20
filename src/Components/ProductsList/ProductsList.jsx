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
        <li key={product.id}>
          <ProductItem
            {...product}
            onClickModal={updateModal}
            onClickId={getId}
          />
        </li>
      ))}
      <div></div>
    </ul>
  );
};

export default ProductsList;
