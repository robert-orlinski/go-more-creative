import { FetchedEntryType, TopicType } from '../types/global';

export interface StatusMessageType {
  statusMessage: string | undefined;
}

export interface CurrentTopicType {
  currentTopic: TopicType;
}

export interface EntriesType extends StatusMessageType {
  list: FetchedEntryType[];
}

export interface TopicsType extends CurrentTopicType, StatusMessageType {
  list: TopicType[];
}

export interface PointsType extends StatusMessageType {
  points: number;
}

export interface StreakType extends StatusMessageType {
  streak: number;
}

export interface StoreType {
  entries: EntriesType;
  topics: TopicsType;
  points: PointsType;
  streak: StreakType;
}
