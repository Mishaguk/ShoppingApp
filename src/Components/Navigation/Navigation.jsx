import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

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
        className={styles.tabButtonProfile}
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
