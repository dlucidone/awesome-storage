/**
 * Get cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
declare const getCookie: (name: string) => any;
/**
 * Set cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
declare const setCookie: (name: string, value: string, days: number) => string;
/**
 * Clear all the cookie storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
declare const clearCookieStorageData: () => void;
export { getCookie, setCookie, clearCookieStorageData };
