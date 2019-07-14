export const loadFromLocalStorageByKey = storageKey =>
  JSON.parse(localStorage.getItem(storageKey)) || [];

export const saveToLocalStorageByKey = (storageKey, value) =>
  localStorage.setItem(storageKey, value);
