import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { EntriesType } from '../../store/types';
import { LinkButton } from '../Button/Link';
import { ListedEntry } from '../ListedEntry';

export const EntriesList = () => {
  const entries = useSelector((state: EntriesType) => state.entries);

  return (
    <>
      {entries ? (
        entries.map(({ _id, topic, ideas }, i) => (
          <ListedEntry _id={_id} topic={topic} ideas={ideas} i={i} key={_id} />
        ))
      ) : (
        <article className="center">
          <p className="textCenter marginBottomM">
            oh... you do not have any ideas. but you can add them immediately:
          </p>
          <LinkButton href="/practice" className="">
            i will do it!
          </LinkButton>
        </article>
      )}
    </>
  );
};
