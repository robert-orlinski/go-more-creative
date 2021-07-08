import { Session } from 'next-auth';
import { getSession } from 'next-auth/client';
import { Types } from 'mongoose';

import { Entry } from '../../../helpers/api/Models/Entry';

import { withDatabase } from '../../../helpers/api/withDatabase';
import { withRequestMethod } from '../../../helpers/api/withRequestMethod';

import { EntryType } from '../../../types/global';

const getStreakToAdd = async (userId: string) => {
  const lastEntry: EntryType | null = await Entry.findOne({ userId: userId }).sort({
    _id: -1,
  });

  if (lastEntry) {
    const lastEntryDateDay = new Date(lastEntry.date).getDate();
    const today = new Date().getDate();
    const yesterday = today - 1;

    const isLastEntryToday = lastEntryDateDay === today;
    const isLastEntryYesterday = lastEntryDateDay === yesterday;

    if (isLastEntryToday) {
      return lastEntry.streak;
    } else if (isLastEntryYesterday) {
      return lastEntry.streak + 1;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
};

const addEntry = withRequestMethod({
  POST: withDatabase(async (req, res) => {
    const { user } = (await getSession({ req })) as Session;

    const data: EntryType = JSON.parse(req.body);

    const streakToAdd = await getStreakToAdd(user.id);

    const pointsForTheTopicLevel =
      data.topic.level === 'easy' ? 10 : data.topic.level === 'normal' ? 20 : 30;
    const pointsToAdd = pointsForTheTopicLevel * streakToAdd;

    const newEntry = new Entry({
      ...data,
      userId: Types.ObjectId(user.id),
      pointsGained: pointsToAdd,
      streak: streakToAdd,
    });

    await newEntry.save();

    res.status(201).json(newEntry);
  }),
});

export default addEntry;
