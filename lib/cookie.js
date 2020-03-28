"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Get cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
var getCookie = function (name) {
    function escape(s) {
        return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    }
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
};
exports.getCookie = getCookie;
/**
 * Clear all the cookie storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
var clearCookieStorageData = function () {
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
};
exports.clearCookieStorageData = clearCookieStorageData;
