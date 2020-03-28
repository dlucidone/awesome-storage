declare var window: any;
/**
 * Get the data from the local storage for corresponding key
 *
 * @function
 * @param {String} key - Key Stored in Local Storage
 * @return {String} Value Stored with the param key
 */
const getLocalStorageData = (key: string) => {
  return window.localStorage.getItem(key);
};

/**
 * Set the data in the local storage with key and value respectively
 *
 * @function
 * @param {String} key - Key Stored in Local Storage
 * @param {String} value - Value Stored in Local Storage
 * @return {undefined} undefined
 */
const setLocalStorageData = (key: string, value: string) => {
  return window.localStorage.setItem(key, value);
};

/**
 * Clear all the local storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
const clearLocalStorageData = () => {
  window.localStorage.clear();
};

export { getLocalStorageData, setLocalStorageData, clearLocalStorageData };
