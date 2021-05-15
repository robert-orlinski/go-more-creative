import styles from './Header.module.scss';

import { Nav } from '../Nav';

export const Header = () => (
  <header className={styles.header}>
    <Nav />
  </header>
);
