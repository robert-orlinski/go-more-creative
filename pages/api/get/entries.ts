import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../helpers/api/connect';
import { Entry } from '../../../helpers/api/Models/Entry';
import { EntryType } from '../../../types/global';

const getEntries = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();

    const entries: EntryType[] = await Entry.find();
    res.send(entries);
  } catch (err) {
    console.log(err);

    res.status(500).send('There is an error');
  }
};

export default getEntries;
