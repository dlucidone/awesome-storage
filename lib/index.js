"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localStorage = require("./localStorage");
exports.localStorage = localStorage;
var cookieStorage = require("./cookie");
exports.cookieStorage = cookieStorage;
/**
 * Check is any Storage object is present or not
 *
 * @function
 * @return {undefined} undefined
 */
function isStorageAvailable() {
    if (typeof Storage !== 'undefined') {
        return true;
    }
    else {
        return false;
    }
}
exports.default = isStorageAvailable;
