import mongoose, { Document, model, Model, Schema } from 'mongoose';

export interface EntryType extends Document {
  ideas: string[];
  date: Date;
  // points: number;
  // currentStrike: number;
  // timesFulfilledToday: number;
}

const EntrySchema: Schema = new Schema({
  ideas: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // points: {
  //   Number,
  // },
  // currentStrike: {
  //   Number,
  // },
  // timesFulfilledToday: {
  //   Number,
  // },
});

export const Entry: Model<EntryType> = mongoose.models.Entry || model('Entry', EntrySchema);
