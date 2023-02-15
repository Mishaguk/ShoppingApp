import MainMenu from './MainMenu/MainMenu';
import ProductsList from './ProductsList/ProductsList';
import { Route, useRoutes } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import CartPage from './Pages/CartPage/CartPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';

const style = {
  display: 'flex',
};

const App = () => {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Catalog" element={<ProductsPage />} />
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Profile" />
      </Routes>
    </div>
  );
};

export default App;
