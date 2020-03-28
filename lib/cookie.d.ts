/**
 * Get cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
declare const getCookie: (name: string) => any;
/**
 * Clear all the cookie storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
declare const clearCookieStorageData: () => void;
export { getCookie, clearCookieStorageData };
