import React from 'react';
import styles from './Header.module.scss';

import MainTitle from '../MainTitle/MainTitle';
import Nav from '../Nav/Nav';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Nav />
    <MainTitle>hey! you have 10 ideas to create!</MainTitle>
  </header>
);

export default Header;
