import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../helpers/api/connect';
import { Entry } from '../../../helpers/api/Models/Entry';

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      await connectToDatabase();

      const { _id } = JSON.parse(req.body);
      await Entry.deleteOne({ _id });

      res.status(200).send('entry deleted');
    } catch (err) {
      res.status(500).send('something went wrong 💔');
    }
  } else {
    res.status(405).send('method not allowed');
  }
};

export default deleteEntry;
