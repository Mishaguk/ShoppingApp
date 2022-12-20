import Navigation from '../Navigation/Navigation';
import Filter from '../Filter/Filter';
import './MainMenu.css';
const MainMenu = () => (
  <div className="main-div">
    <div className="title-text">
      <span className="shoppingAppText">Shopping App</span>
    </div>

    <Navigation />
    <Filter />
  </div>
);

export default MainMenu;
