import { FetchedEntryType, TopicType } from '../types/global';

export interface statusMessageType {
  statusMessage: string | undefined;
}

export interface EntriesType extends statusMessageType {
  list: FetchedEntryType[];
}

export interface TopicsType extends statusMessageType {
  list: TopicType[];
  currentTopic: TopicType;
}

export interface PointsType extends statusMessageType {
  points: number;
}

export interface StreakType extends statusMessageType {
  streak: number;
}

export interface StoreType {
  entries: EntriesType;
  topics: TopicsType;
  points: PointsType;
  streak: StreakType;
}
