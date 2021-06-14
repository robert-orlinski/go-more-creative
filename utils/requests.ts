import { EntryType, MongoIdType } from '../types/global';

export const getEntriesFromApi = async () =>
  await fetch('/api/get/entries', {
    method: 'GET',
  });

export const addEntryToApi = async (data: EntryType) =>
  await fetch('/api/post/entry', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const deleteEntryFromApi = async (_id: string) =>
  await fetch('/api/delete/entry', {
    method: 'DELETE',
    body: JSON.stringify({ _id }),
  });

export const getTopicsFromApi = async () =>
  await fetch('/api/get/topics', {
    method: 'GET',
  });
