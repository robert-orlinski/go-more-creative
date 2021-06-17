import React from 'react';
import { useSelector } from 'react-redux';

import { EntriesStateType } from '../../store/types';
import { LinkButton } from '../Button/Link';
import { ListedEntry } from '../ListedEntry';

export const EntriesList = () => {
  const { statusMessage, list } = useSelector((state: EntriesStateType) => state.entries);

  return (
    <>
      {statusMessage ? (
        <article className="center">
          <p className="textCenter marginBottomM">Loading...</p>
        </article>
      ) : list.length > 0 ? (
        list.map(({ _id, topic, ideas }, i) => (
          <ListedEntry _id={_id} topic={topic} ideas={ideas} i={i} key={_id} />
        ))
      ) : (
        <article className="center">
          <p className="textCenter marginBottomM">
            oh... you do not have any ideas. but you can add them immediately:
          </p>
          <LinkButton href="/practice">i will do it!</LinkButton>
        </article>
      )}
    </>
  );
};
