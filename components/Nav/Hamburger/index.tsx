import { FC } from 'react';
import classNames from 'classnames';
import classNamesToBind from 'classnames/bind';

import { HamburgerType } from '../../../types/types';

import styles from './Hamburger.module.scss';
const moduleClasses = classNamesToBind.bind(styles);

export const Hamburger: FC<HamburgerType> = ({ onClick, isActive }) => (
  <button
    className={classNames('opacity pointer', styles.hamburger)}
    onClick={onClick}
    aria-label={isActive ? 'Close navigation' : 'Open navigation'}
  >
    <span
      className={moduleClasses({
        inner: true,
        active: isActive,
      })}
    />
  </button>
);
