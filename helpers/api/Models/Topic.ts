import mongoose, { model, Model, Schema } from 'mongoose';
import { TopicType } from '../../../types/global';

export const TopicSchema: Schema = new Schema(
  {
    name: {
      type: String,
    },
    level: {
      type: String,
    },
  },
  {
    collection: 'topics',
  },
);

export const Topic: Model<TopicType> = mongoose.models.Topic || model('Topic', TopicSchema);
