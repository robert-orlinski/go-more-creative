import { Topic } from '../../../helpers/api/Models/Topic';

import { getRandomItemFromArrayOrNullIfThereIsNoItems } from '../../../helpers/functions';

import { withRequestMethod } from '../../../helpers/api/withRequestMethod';
import { withDatabase } from '../../../helpers/api/withDatabase';
import { withAuthGuard } from '../../../helpers/api/withAuthGuard';

import { TopicType } from '../../../types/global';

const getTopics = withRequestMethod({
  GET: withDatabase(
    withAuthGuard(async (req, res) => {
      const topics: TopicType[] = await Topic.find();

      res.status(200).json({
        list: topics,
        firstTopic: getRandomItemFromArrayOrNullIfThereIsNoItems(topics),
      });
    }),
  ),
});

export default getTopics;
