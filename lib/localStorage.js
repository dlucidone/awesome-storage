"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get the data from the local storage for corresponding key
 *
 * @function
 * @param {String} key - Key Stored in Local Storage
 * @return {String} Value Stored with the param key
 */
var getLocalStorageData = function (key) {
    return window.localStorage.getItem(key);
};
exports.getLocalStorageData = getLocalStorageData;
/**
 * Set the data in the local storage with key and value respectively
 *
 * @function
 * @param {String} key - Key Stored in Local Storage
 * @param {String} value - Value Stored in Local Storage
 * @return {undefined} undefined
 */
var setLocalStorageData = function (key, value) {
    return window.localStorage.setItem(key, value);
};
exports.setLocalStorageData = setLocalStorageData;
/**
 * Remove the data in local storage by key
 *
 * @function
 * @return {undefined} undefined
 */
var removeLocalStorageDataByKey = function (key) {
    window.localStorage.removeItem(key);
};
exports.removeLocalStorageDataByKey = removeLocalStorageDataByKey;
/**
 * Clear all the local storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
var clearLocalStorageData = function () {
    window.localStorage.clear();
};
exports.clearLocalStorageData = clearLocalStorageData;
