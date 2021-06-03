import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../api-helpers/connect';
import { Entry } from '../../api-helpers/Models/Entry';
import { AddedEntryType } from '../../types/global';

const addEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const body: AddedEntryType = JSON.parse(req.body);
      const newEntry = new Entry(body);
      const saved = await newEntry.save();

      res.send(saved);
    } catch (err) {
      console.log(err);

      res.status(500).send('error');
    }
  } else {
    res.status(405).json({ messagge: 'Method not allowed' });
  }
};

export default addEntry;
