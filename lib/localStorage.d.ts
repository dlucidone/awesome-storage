/**
 * Get the data from the local storage for corresponding key
 *
 * @function
 * @param {String} key - Key Stored in Local Storage
 * @return {String} Value Stored with the param key
 */
declare const getLocalStorageData: (key: string) => any;
/**
 * Set the data in the local storage with key and value respectively
 *
 * @function
 * @param {String} key - Key Stored in Local Storage
 * @param {String} value - Value Stored in Local Storage
 * @return {undefined} undefined
 */
declare const setLocalStorageData: (key: string, value: string) => any;
/**
 * Clear all the local storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
declare const clearLocalStorageData: () => void;
export { getLocalStorageData, setLocalStorageData, clearLocalStorageData };
