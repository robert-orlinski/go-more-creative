import { EntryTypeToAdd } from '../types/global';

export const getTopicsFromApi = async () => await fetch('/api/get/topics');

export const getEntriesFromApi = async () => await fetch('/api/get/entries');

export const addEntryToApi = async (data: EntryTypeToAdd) =>
  await fetch('/api/post/entry', {
    method: 'POST',
    body: JSON.stringify(data),
  });
