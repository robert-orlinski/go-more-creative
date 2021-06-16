import { Entry } from '../../../helpers/api/Models/Entry';

import { useRequestMethod } from '../../../helpers/api/useRequestMethod';
import { useDatabase } from '../../../helpers/api/useDatabase';

import { EntryType } from '../../../types/global';

const getEntries = useRequestMethod({
  GET: useDatabase(async (req, res) => {
    const entries: EntryType[] = await Entry.find();

    res.send(entries);
  }),
});

export default getEntries;
