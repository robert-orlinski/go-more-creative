import mongoose, { model, Model, Schema } from 'mongoose';
import { EntryType } from '../../../types/global';

import { TopicSchema } from './Topic';

export const EntrySchema: Schema = new Schema(
  {
    topic: {
      type: TopicSchema,
    },
    ideas: {
      type: [[String, String]],
    },
    userId: {
      type: Schema.Types.ObjectId,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    pointsGained: {
      type: Number,
    },
    streak: {
      type: Number,
    },
  },
  {
    collection: 'entries',
  },
);

export const Entry: Model<EntryType> = mongoose.models.Entry || model('Entry', EntrySchema);
