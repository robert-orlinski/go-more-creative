import { Brand } from '../Brand';

import styles from './Nav.module.scss';

export const Nav: React.FC = () => (
  <nav className={styles.nav}>
    <Brand />
  </nav>
);
