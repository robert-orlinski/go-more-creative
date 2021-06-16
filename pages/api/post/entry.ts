import { Entry } from '../../../helpers/api/Models/Entry';

import { useDatabase } from '../../../helpers/api/useDatabase';
import { useRequestMethod } from '../../../helpers/api/useRequestMethod';

import { EntryType } from '../../../types/global';

const addEntry = useRequestMethod({
  POST: useDatabase(async (req, res) => {
    const data: EntryType = JSON.parse(req.body);
    const newEntry = new Entry(data);

    await newEntry.save();

    res.status(201).json(newEntry);
  }),
});
