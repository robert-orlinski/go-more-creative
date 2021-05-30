export const getEntries = async () => {
  return await fetch('/api/get-entries', {
    method: 'GET',
  });
};
