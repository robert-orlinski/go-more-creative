import mongoose, { model, Model, Schema } from 'mongoose';
import { EntryType } from '../../../types/global';

const EntrySchema: Schema = new Schema(
  {
    topic: {
      type: String,
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
  },
  {
    collection: 'entries',
  },
);

export const Entry: Model<EntryType> = mongoose.models.Entry || model('Entry', EntrySchema);
