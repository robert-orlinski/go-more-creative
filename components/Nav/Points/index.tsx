import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import navStyles from '../Nav.module.scss';
import styles from './Points.module.scss';

import { StarIcon } from './Icons/StarIcon';

import { SelectivelyVisibleElementType } from '../../../types/global';
import { StoreType } from '../../../store/types';

export const Points: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => {
  const { list } = useSelector((state: StoreType) => state.entries);

  const points = useMemo(() => {
    let addedPoints = 0;

    if (list.length) {
      list.forEach(({ topic }) => {
        if (topic.level === 'easy') addedPoints += 10;
        else if (topic.level === 'normal') addedPoints += 20;
        else addedPoints += 30;
      });
    }

    return addedPoints;
  }, [list]);

  return (
    <ul className={classNames('flex unstyledList', visibleOnClassName)}>
      <li className={classNames('flex alignCenter', navStyles.multipleGroup)}>
        <StarIcon />
        <span className={styles.number}>{points}</span>
      </li>
    </ul>
  );
};
