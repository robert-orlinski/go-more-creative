import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import navStyles from '../Nav.module.scss';

import { SelectivelyVisibleElementType } from '../../../types/types';

export const Logout: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => (
  <Link href="/logout">
    <a
      className={classNames('flex alignCenter opacity', navStyles.singleGroup, visibleOnClassName)}
    >
      logout
    </a>
    {/* TODO: language switcher */}
  </Link>
);
