import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../api-helpers/connect';
import { Entry, EntryType } from '../../api-helpers/Models/Entry';

const addEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const body: EntryType = JSON.parse(req.body);
      const newPost = new Entry(body);
      const saved = await newPost.save();

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
