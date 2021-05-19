import { FC } from 'react';
import classNames from 'classnames';

import { ButtonType } from '../types';

import styles from '../Button.module.scss';

export const ClassicButton: FC<ButtonType> = ({ children, type, className }) => (
  <button type={type} className={classNames('cursorPointer', styles.button, className)}>
    {children}
  </button>
);
