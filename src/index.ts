import * as localStorage from './localStorage';
import * as sessionStorage from './sessionStorage';
import * as cookieStorage from './cookie';
declare var Storage: any;

/**
 * Check is any Storage object is present or not
 *
 * @function
 * @return {undefined} undefined
 */
export default function isStorageAvailable() {
    if (typeof Storage !== 'undefined') {
        return true;
    } else {
        return false;
    }
}

export { localStorage, cookieStorage, sessionStorage };
