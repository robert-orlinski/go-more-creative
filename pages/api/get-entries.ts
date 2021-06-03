import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../api-helpers/connect';
import { Entry } from '../../api-helpers/Models/Entry';
import { AddedEntryType } from '../../types/global';

const getEntries = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();

    const entries: AddedEntryType[] = await Entry.find();
    res.send(entries);
  } catch (err) {
    console.log(err);

    res.status(500).send('error');
  }
};

export default getEntries;
