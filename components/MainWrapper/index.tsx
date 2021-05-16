import { FC } from 'react';
import classNames from 'classnames';

import { MainWrapperType } from '../../types/types';

import styles from './MainWrapper.module.scss';

export const MainWrapper: FC<MainWrapperType> = ({ children, theme }) => (
  <main className={classNames('wrapper', styles.wrapperWithSpace, theme)}>{children}</main>
);
