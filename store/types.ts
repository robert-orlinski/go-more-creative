import { EntryType } from '../types/global';

export interface EntriesType {
  entries: EntryType[];
  loading: 'idle' | 'pending' | 'fulfilled' | 'failed';
  error: null | object;
}
