import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.mainHead}>
      <NavLink
        className={styles.tabButton}
        to="/Catalog"
        style={({ isActive }) =>
          isActive ? { borderBottom: 'solid 1px #00ccff' } : undefined
        } // mui component
      >
        Catalog
      </NavLink>

      <NavLink
        to="/Cart"
        className={styles.tabButton}
        style={({ isActive }) =>
          isActive ? { borderBottom: 'solid 1px #00ccff' } : undefined
        }
      >
        {/* <img
          src="https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png"
          width={30}
          height={30}
        ></img> */}
        Cart
      </NavLink>
      <NavLink
        className={styles.tabButton}
        to="/Profile"
        style={({ isActive }) =>
          isActive ? { borderBottom: 'solid 1px #00ccff' } : undefined
        }
      >
        Profile
      </NavLink>
    </header>
  );
};

export default Navigation;
