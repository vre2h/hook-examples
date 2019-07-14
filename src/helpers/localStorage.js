export const loadFromLocalStorageByKey = storageKey =>
  localStorage.getItem(storageKey) || [];

export const saveToLocalStorageByKey = (storageKey, value) =>
  localStorage.setItem(storageKey, value);
