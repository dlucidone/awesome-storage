declare var document: any;

/**
 * Get cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
const getCookie = function (name: string) {
    function escape(s: string) {
        return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    }
    let match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
};

/**
 * Clear all the cookie storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
const clearCookieStorageData = function () {
    document.cookie.split(';').forEach(function (c: string) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
};

export { getCookie, clearCookieStorageData };
