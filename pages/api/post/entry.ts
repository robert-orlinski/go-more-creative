import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../helpers/api/connect';
import { Entry } from '../../../helpers/api/Models/Entry';
import { EntryType } from '../../../types/global';

const addEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const data: EntryType = JSON.parse(req.body);
      const newEntry = new Entry(data);

      await newEntry.save();

      res.status(201).json(newEntry);
    } catch (err) {
      console.log(err);

      res.status(500).send("ideas weren't added. something went wrong 💔");
    }
  } else {
    res.status(405).send('method not allowed');
  }
};

export default addEntry;
