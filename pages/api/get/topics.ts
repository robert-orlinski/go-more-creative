import { Topic } from '../../../helpers/api/Models/Topic';

import { useRequestMethod } from '../../../helpers/api/useRequestMethod';
import { useDatabase } from '../../../helpers/api/useDatabase';

import { TopicType } from '../../../types/global';

const getTopics = useRequestMethod({
  GET: useDatabase(async (req, res) => {
    const topics: TopicType[] = await Topic.find();
    res.send(topics);
  }),
});

export default getTopics;
