import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import { Types } from 'mongoose';

import { Entry } from '../../../helpers/api/Models/Entry';

import { withDatabase } from '../../../helpers/api/withDatabase';
import { withRequestMethod } from '../../../helpers/api/withRequestMethod';

import { EntryType } from '../../../types/global';

const addEntry = withRequestMethod({
  POST: withDatabase(async (req, res) => {
    const { user } = (await getSession({ req })) as Session;

    const data: EntryType = JSON.parse(req.body);

    const pointsForTheTopicLevel =
      data.topic.level === 'easy' ? 10 : data.topic.level === 'normal' ? 20 : 30;

    const newEntry = new Entry({
      ...data,
      userId: Types.ObjectId(user.id),
      pointsGained: pointsForTheTopicLevel,
    });

    await newEntry.save();

    res.status(201).json(newEntry);
  }),
});

export default addEntry;
