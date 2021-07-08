import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './ListedEntry.module.scss';

import { ListedEntryType } from '../../types/global';

export const ListedEntry: FC<ListedEntryType> = ({ _id, topic, ideas, i }) => {
  const visibleIndex = (i < 9 ? '0' : '') + `${++i}.`;

  return (
    <details className={styles.entry} data-testid={`entry-container-${i}`}>
      <summary
        className={classNames('cursorPointer', styles.title)}
        data-testid={`entry-header-${i}`}
      >
        <span className={styles.indexContainer}>
          <span className={styles.index}>{visibleIndex}</span>
        </span>
        <span className="highlight">{topic.name}</span>
      </summary>
      <article className={styles.content}>
        <ol className={styles.list}>
          {ideas.map(([ideaId, idea]) => (
            <li className={styles.listItem} key={`${_id}-${ideaId}`}>
              {idea}
            </li>
          ))}
        </ol>
      </article>
    </details>
  );
};
