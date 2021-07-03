import { EntryTypeToAdd } from '../types/global';

export const getTopicsFromApi = async () => await fetch('/api/get/topics');

export const getEntriesFromApi = async () => await fetch('/api/get/entries');

export const addEntryToApi = async (data: EntryTypeToAdd) =>
  await fetch('/api/post/entry', {
    method: 'POST',
    body: JSON.stringify(data),
  });

export const deleteEntryFromApi = async (_id: string) =>
  await fetch('/api/delete/entry', {
    method: 'DELETE',
    body: JSON.stringify({ _id }),
  });
