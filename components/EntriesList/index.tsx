import { useSelector } from 'react-redux';

import { EntriesStateType } from '../../store/types';
import { LinkButton } from '../Button/Link';
import { ListedEntry } from '../ListedEntry';

export const EntriesList = () => {
  const entries = useSelector((state: EntriesStateType) => state.entries);

  return (
    <>
      {entries ? (
        entries.map(({ _id, topic, ideas }, i) => (
          <ListedEntry _id={_id} topic={topic} ideas={ideas} i={i} key={_id as string} />
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
