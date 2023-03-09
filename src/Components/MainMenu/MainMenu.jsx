import Navigation from '../Navigation/Navigation';
import Filter from '../Filter/Filter';
import './MainMenu.css';
import { useLocation } from 'react-router-dom';
import CartInfo from '../Pages/CartPage/CartInfo';
const MainMenu = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="main-div">
      <div className="title-text">
        <span className="shoppingAppText">Shopping App</span>
      </div>

      <Navigation />
      {location.pathname === '/Catalog' ? <Filter /> : ''}
      {location.pathname === '/Cart' ? <CartInfo /> : ''}
    </div>
  );
};

export default MainMenu;
