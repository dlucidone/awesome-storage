declare var document: any;

/**
 * Get cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
const getCookie = (name: string) => {
    function escape(s: string) {
        return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1');
    }
    const match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
};

/**
 * Set cookie data by name
 *
 * @function
 * @return {string} data | undefined
 */
const setCookie = (name: string, value: string, days: number) => {
    let date = new Date;
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * days);
    return document.cookie = name + "=" + value + ";path=/;expires=" + date.toUTCString();
}

/**
 * Clear all the cookie storage data - clean sweep
 *
 * @function
 * @return {undefined} undefined
 */
const clearCookieStorageData = () => {
    document.cookie.split(';').forEach(function (c: string) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
};

export { getCookie, setCookie, clearCookieStorageData };
