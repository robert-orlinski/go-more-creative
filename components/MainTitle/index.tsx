import { FC } from 'react';
import classNames from 'classnames';
import styles from './MainTitle.module.scss';

export const MainTitle: FC = ({ children }) => (
  <h2 className={classNames('textCenter', styles.title)}>{children}</h2>
);
