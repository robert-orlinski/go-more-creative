import React, { FC, useState } from 'react';
import { useSession } from 'next-auth/client';

import { Brand } from './Brand';
import { List } from './List';
import { Login } from './Login';
import { Logout } from './Logout';
import { Points } from './Points';
import { Hamburger } from './Hamburger';

import styles from './Nav.module.scss';

export const Nav = () => {
  const [session] = useSession();

  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <header>
      <nav className={styles.nav}>
        <Brand />
        <div className="flex alignCenter">
          {session ? (
            <>
              <Points visibleOnClassName="visibleOnWiderThanTablet" />
              <Logout visibleOnClassName="visibleOnWiderThanMobile" />
              <Hamburger
                onClick={() => setMobileMenuVisibility(!isMobileMenuVisible)}
                isActive={isMobileMenuVisible}
              />
            </>
          ) : (
            <Login visibleOnClassName="visibleOnWiderThanMobile" />
          )}
        </div>
        <List isVisible={isMobileMenuVisible} />
      </nav>
    </header>
  );
};
