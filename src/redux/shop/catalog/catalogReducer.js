import * as actions from './catalogActions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      img: 'https://content.rozetka.com.ua/goods/images/big/119631086.jpg',
      name: 'keyboard',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac iaculis nibh. Maecenas quam lorem, viverra sit amet faucibus fringilla, ornare a magna. Praesent ac mattis quam. Proin ut nisl quis ante pellentesque dignissim. Sed sed elementum tellus, at pellentesque mi. Ut euismod a orci et faucibus. Curabitur ullamcorper ex eget elementum lobortis. Vestibulum pretium dignissim erat eu interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac iaculis nibh. Maecenas quam lorem, viverra sit amet faucibus fringilla, ornare a magna. Praesent ac mattis quam. Proin ut nisl quis ante pellentesque dignissim. Sed sed elementum tellus, at pellentesque mi. Ut euismod a orci et faucibus. Curabitur ullamcorper ex eget elementum lobortis. Vestibulum pretium dignissim erat eu interdum',
      price: 12,
      manufacturer: 'Ergo',
      amount: 0,
    },
    {
      id: 2,
      img: 'https://content.rozetka.com.ua/goods/images/big/300747657.jpg',
      name: 'monitor',
      description:
        ' AOC 24G2SAE/BK - 165 Hz / Adaptive Sync / G-SYNC Compatible DisplayPort / Freesync Premium / DisplayHDR 400 / Speaker. Praesent ac mattis quam. Proin ut nisl quis ante pellentesque dignissim. Sed sed elementum tellus, at pellentesque mi. Ut euismod a orci et faucibus. Curabitur ullamcorper ex eget elementum lobortis. Vestibulum pretium dignissim erat eu interdum.',
      price: 214,
      manufacturer: 'AOC',
      amount: 0,
    },
    {
      id: 3,
      img: 'https://content2.rozetka.com.ua/goods/images/big/298580248.jpg',
      name: 'Geforce RTX 3060Ti',
      description:
        'Videocard Gigabyte RTX 3060Ti 8Gb Gaming OC LHR (GV-N306TGAMING OC-8GD rev.2.0) (8 Гб, GDDR6, 256 бит, PCI Express 4.0 x16). Proin ut nisl quis ante pellentesque dignissim. Sed sed elementum tellus, at pellentesque mi. Ut euismod a orci et faucibus. Curabitur ullamcorper ex eget elementum lobortis. Vestibulum pretium dignissim erat eu interdum.',
      price: 245,
      manufacturer: 'Gigabyte ',
      amount: 0,
    },
    {
      id: 4,
      img: 'https://content.rozetka.com.ua/goods/images/big/101601326.png',
      name: 'MSI PCI-Ex GeForce GTX 1660 Super',
      description:
        'MSI PCI-Ex GeForce GTX 1660 Super Gaming X 6GB GDDR6 (192bit) (1830/14000) (HDMI, 3 x DisplayPort) (GTX 1660 SUPER GAMING X). Maecenas quam lorem, viverra sit amet faucibus fringilla, ornare a magna. Praesent ac mattis quam. Proin ut nisl quis ante pellentesque dignissim. Sed sed elementum tellus, at pellentesque mi. Ut euismod a orci et faucibus. Curabitur ullamcorper ex eget elementum lobortis. Vestibulum pretium dignissim erat eu interdum.',
      price: 345,
      manufacturer: 'NVIDIA',
      amount: 0,
    },
  ],
  filter: '',
};

const products = createReducer(initialState.products, {
  [actions.loadProducts]: (state, action) => action.payload,
});

const filter = createReducer(initialState.filter, {
  [actions.filterProducts]: (state, action) => action.payload,
});

export default combineReducers({ products, filter });
