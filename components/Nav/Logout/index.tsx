import React, { FC } from 'react';
import { signOut } from 'next-auth/client';
import classNames from 'classnames';

import navStyles from '../Nav.module.scss';

import { SelectivelyVisibleElementType } from '../../../types/global';

export const Logout: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => (
  <button
    className={classNames(
      'flex alignCenter opacity cursorPointer',
      navStyles.singleGroup,
      visibleOnClassName,
    )}
    onClick={() => signOut()}
  >
    log out
  </button>
);
