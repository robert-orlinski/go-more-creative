import mongoose, { model, Model, Schema } from 'mongoose';
import { AddedEntryType } from '../../types/global';

const EntrySchema: Schema = new Schema(
  {
    topic: {
      type: String,
    },
    ideas: {
      type: [[String, String]],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: 'entries',
  },
);

export const Entry: Model<AddedEntryType> = mongoose.models.Entry || model('Entry', EntrySchema);
