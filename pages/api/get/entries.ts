import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';

import { Entry } from '../../../helpers/api/Models/Entry';

import { useRequestMethod } from '../../../helpers/api/useRequestMethod';
import { useDatabase } from '../../../helpers/api/useDatabase';
import { useAuthGuard } from '../../../helpers/api/useAuthGuard';

import { EntryType } from '../../../types/global';

const getEntries = useRequestMethod({
  GET: useDatabase(
    useAuthGuard(async (req, res) => {
      const { user } = (await getSession({ req })) as Session;

      const entries: EntryType[] = await Entry.find({ userId: user.id });

      res.json(entries);
    }),
  ),
});

export default getEntries;
