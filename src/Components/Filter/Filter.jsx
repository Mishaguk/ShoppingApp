import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { getFilter } from '../../redux/shop/catalog/catalogSelector';
import * as actions from '../../redux/shop/catalog/catalogActions';
import { useSelector } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = (e) => {
    dispatch(actions.filterProducts(e.target.value));
  };
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search product..."
        onChange={handleChange}
        value={filter}
      ></input>
    </label>
  );
};

export default Filter;
