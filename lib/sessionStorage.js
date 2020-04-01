"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the data from the Session storage for corresponding key
 *
 * @function
 * @param {String} key - Key Stored in Session Storage
 * @return {String} Value Stored with the param key
 */
var getSessionStorageData = function (key) {
    return window.sessionStorage.getItem(key);
};
exports.getSessionStorageData = getSessionStorageData;
/**
 * Set the data in the Session storage with key and value respectively
 *
 * @function
 * @param {String} key - Key Stored in Session Storage
 * @param {String} value - Value Stored in Session Storage
 * @return {undefined} undefined
 */
var setSessionStorageData = function (key, value) {
    return window.sessionStorage.setItem(key, value);
};
exports.setSessionStorageData = setSessionStorageData;
/**
 * Remove the data in Session storage by key
 *
 * @function
 * @return {undefined} undefined
 */
var removeSessionStorageDataByKey = function (key) {
    window.sessionStorage.removeItem(key);
};
exports.removeSessionStorageDataByKey = removeSessionStorageDataByKey;
/**
 * Clear all the Session storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
var clearSessionStorageData = function () {
    window.sessionStorage.clear();
};
exports.clearSessionStorageData = clearSessionStorageData;
