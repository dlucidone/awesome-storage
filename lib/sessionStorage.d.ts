/**
 * Get the data from the Session storage for corresponding key
 *
 * @function
 * @param {String} key - Key Stored in Session Storage
 * @return {String} Value Stored with the param key
 */
declare const getSessionStorageData: (key: string) => any;
/**
 * Set the data in the Session storage with key and value respectively
 *
 * @function
 * @param {String} key - Key Stored in Session Storage
 * @param {String} value - Value Stored in Session Storage
 * @return {undefined} undefined
 */
declare const setSessionStorageData: (key: string, value: string) => any;
/**
 * Remove the data in Session storage by key
 *
 * @function
 * @return {undefined} undefined
 */
declare const removeSessionStorageDataByKey: (key: string) => void;
/**
 * Clear all the Session storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
declare const clearSessionStorageData: () => void;
export { getSessionStorageData, setSessionStorageData, removeSessionStorageDataByKey, clearSessionStorageData };
