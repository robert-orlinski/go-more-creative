import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';

import { Entry } from '../../../helpers/api/Models/Entry';

import { withRequestMethod } from '../../../helpers/api/withRequestMethod';
import { withDatabase } from '../../../helpers/api/withDatabase';
import { withAuthGuard } from '../../../helpers/api/withAuthGuard';

import { EntryType } from '../../../types/global';

const getEntries = withRequestMethod({
  GET: withDatabase(
    withAuthGuard(async (req, res) => {
      const { user } = (await getSession({ req })) as Session;

      const entries: EntryType[] = await Entry.find({ userId: user.id });

      res.status(200).json(entries);
    }),
  ),
});

export default getEntries;
