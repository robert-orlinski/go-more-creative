import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import { Types } from 'mongoose';

import { Entry } from '../../../helpers/api/Models/Entry';

import { useDatabase } from '../../../helpers/api/useDatabase';
import { useRequestMethod } from '../../../helpers/api/useRequestMethod';

import { EntryType } from '../../../types/global';

const addEntry = useRequestMethod({
  POST: useDatabase(async (req, res) => {
    const { user } = (await getSession({ req })) as Session;

    const data: EntryType = JSON.parse(req.body);
    const newEntry = new Entry({ ...data, userId: Types.ObjectId(user.id) });

    await newEntry.save();

    res.status(201).json(newEntry);
  }),
});

export default addEntry;
