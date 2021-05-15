import cn from 'classnames';
import styles from './MainWrapper.module.scss';

import { MainWrapperType } from '../../types/types';

export const MainWrapper: React.FC<MainWrapperType> = ({ children, theme }) => (
  <main className={cn(styles.wrapper, styles[theme])}>{children}</main>
);
