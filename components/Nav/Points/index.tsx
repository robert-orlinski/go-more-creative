import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import navStyles from '../Nav.module.scss';
import styles from './Points.module.scss';

import { FireIcon } from './Icons/FireIcon';
import { StarIcon } from './Icons/StarIcon';

import { SelectivelyVisibleElementType } from '../../../types/global';
import { StoreType } from '../../../store/types';

export const Points: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => {
  const { streak, points } = useSelector((state: StoreType) => ({
    streak: state.streak.streak,
    points: state.points.points,
  }));

  return (
    <ul className={classNames('flex unstyledList', visibleOnClassName)}>
      <li className={classNames('flex alignCenter', navStyles.multipleGroup)}>
        <FireIcon />
        <span className={styles.number}>{streak}</span>
      </li>
      <li className={classNames('flex alignCenter', navStyles.multipleGroup)}>
        <StarIcon />
        <span className={styles.number}>{points}</span>
      </li>
    </ul>
  );
};
