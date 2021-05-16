import { useState } from 'react';

import { Brand } from './Brand';
import { List } from './List';
import { Logout } from './Logout';
import { Points } from './Points';
import { Hamburger } from './Hamburger';

import styles from './Nav.module.scss';

export const Nav = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <nav className={styles.nav}>
      <Brand />
      <div className="flex alignCenter">
        <Points className="visibleOnWiderThanTablet" />
        <Logout className="visibleOnWiderThanMobile" />
        <Hamburger
          onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
          isActive={isMobileMenuVisible}
        />
      </div>
      <List isVisible={isMobileMenuVisible} />
    </nav>
  );
};
