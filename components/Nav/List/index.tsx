import { FC } from 'react';
import Link from 'next/link';
import classNamesToBind from 'classnames/bind';

import styles from './List.module.scss';
const moduleClasses = classNamesToBind.bind(styles);

import { Points } from '../Points';
import { Logout } from '../Logout';

import { NavListType } from '../../../types/types';

export const List: FC<NavListType> = ({ isVisible }) => (
  <aside
    className={moduleClasses({
      container: true,
      visible: isVisible,
    })}
  >
    <ul className="unstyledList">
      <li className={styles.item}>
        <Link href="/practice">
          <a>Practice</a>
        </Link>
      </li>
      <li className={styles.item}>
        <Link href="/list">
          <a>Past entries</a>
        </Link>
      </li>
    </ul>
    <div className={styles.additionals}>
      <Logout visibleOnClassName="visibleOnNarrowerThanMobile" />
      <Points visibleOnClassName="visibleOnNarrowerThanTablet" />
    </div>
  </aside>
);
