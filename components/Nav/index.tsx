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
    <header>
      <nav className={styles.nav}>
        <Brand />
        <div className="flex alignCenter">
          <Points visibleOnClassName="visibleOnWiderThanTablet" />
          <Logout visibleOnClassName="visibleOnWiderThanMobile" />
          <Hamburger
            onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
            isActive={isMobileMenuVisible}
          />
        </div>
        <List isVisible={isMobileMenuVisible} />
      </nav>
    </header>
  );
};
