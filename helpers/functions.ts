export const getRandomItemFromArrayOrNullIfThereIsNoItems = (array: any[]) =>
  array.length ? array[Math.floor(Math.random() * array.length)] : null;
