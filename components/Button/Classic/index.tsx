import React, { FC } from 'react';
import classNames from 'classnames';

import { ButtonType } from '../types';

import styles from '../Button.module.scss';

export const ClassicButton: FC<ButtonType> = ({
  children,
  type,
  className,
  onClick,
  tabIndex,
  testId,
}) => (
  <button
    type={type}
    className={classNames('cursorPointer', styles.button, className)}
    onClick={onClick}
    tabIndex={tabIndex}
    data-testid={testId}
  >
    {children}
  </button>
);
