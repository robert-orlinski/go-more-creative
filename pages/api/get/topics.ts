import { NextApiRequest, NextApiResponse } from 'next';

import { connectToDatabase } from '../../../helpers/api/connect';
import { Topic } from '../../../helpers/api/Models/Topic';
import { TopicType } from '../../../types/global';

const getTopics = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectToDatabase();

    const topics: TopicType[] = await Topic.find();

    res.send(topics);
  } catch (err) {
    console.log(err);

    res.status(500).send('There is an error');
  }
};

export default getTopics;
