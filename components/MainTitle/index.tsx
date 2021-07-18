import { FC } from 'react';
import classNames from 'classnames';
import styles from './MainTitle.module.scss';

import { ClassNameType } from '../Button/types';

export const MainTitle: FC<ClassNameType> = ({ children, className }) => (
  <h2 className={classNames('textCenter', styles.title, className)}>{children}</h2>
);
