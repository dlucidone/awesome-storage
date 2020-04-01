declare var window: any;
/**
 * Get the data from the Session storage for corresponding key
 *
 * @function
 * @param {String} key - Key Stored in Session Storage
 * @return {String} Value Stored with the param key
 */
const getSessionStorageData = (key: string) => {
    return window.sessionStorage.getItem(key);
};

/**
 * Set the data in the Session storage with key and value respectively
 *
 * @function
 * @param {String} key - Key Stored in Session Storage
 * @param {String} value - Value Stored in Session Storage
 * @return {undefined} undefined
 */
const setSessionStorageData = (key: string, value: string) => {
    return window.sessionStorage.setItem(key, value);
};

/**
 * Remove the data in Session storage by key
 *
 * @function
 * @return {undefined} undefined
 */
const removeSessionStorageDataByKey = (key: string) => {
    window.sessionStorage.removeItem(key);
};

/**
 * Clear all the Session storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
const clearSessionStorageData = () => {
    window.sessionStorage.clear();
};

export { getSessionStorageData, setSessionStorageData, removeSessionStorageDataByKey, clearSessionStorageData };
