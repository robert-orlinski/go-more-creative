import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import navStyles from '../Nav.module.scss';
import styles from './Points.module.scss';

import { StarIcon } from './Icons/StarIcon';

import { SelectivelyVisibleElementType } from '../../../types/global';
import { StoreType } from '../../../store/types';

export const Points: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => {
  const { list } = useSelector((state: StoreType) => state.entries);

  const [points, setPoints] = useState(0);

  useEffect(() => {
    if (list.length) {
      let addedPoints = points;

      list.forEach(({ topic }) => {
        if (topic.level === 'easy') addedPoints += 10;
        else if (topic.level === 'normal') addedPoints += 20;
        else addedPoints += 30;
      });

      setPoints(addedPoints);
    }
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
