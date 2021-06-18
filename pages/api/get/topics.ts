import { Topic } from '../../../helpers/api/Models/Topic';

import { useRequestMethod } from '../../../helpers/api/useRequestMethod';
import { useDatabase } from '../../../helpers/api/useDatabase';
import { useAuthGuard } from '../../../helpers/api/useAuthGuard';

import { TopicType } from '../../../types/global';

const getTopics = useRequestMethod({
  GET: useDatabase(
    useAuthGuard(async (req, res) => {
      const topics: TopicType[] = await Topic.find();

      res.json(topics);
    }),
  ),
});

export default getTopics;
