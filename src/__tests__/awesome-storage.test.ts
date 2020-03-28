import { clearLocalStorageData, setLocalStorageData, getLocalStorageData } from '../localStorage';
import { clearCookieStorageData, getCookie } from '../cookie';
import isStorageAvailable from '../index';

describe('Storage Utility', function() {
    it('checks whether the storage is available', () => {
        const value = isStorageAvailable();
        expect(value).toEqual(true || false);
    });
    it('clears all the local storage data', () => {
        const value = clearLocalStorageData();
        expect(value).toEqual(undefined);
    });
    it('sets the key value pair in local storage data', () => {
        const value = setLocalStorageData('time', '1200');
        expect(value).toEqual(undefined);
    });
    it('gets the key value pair in local storage data', () => {
        const value = getLocalStorageData('time');
        expect(value).toEqual('1200');
    });
    it('clears all the cookie storage data', () => {
        const value = clearCookieStorageData();
        expect(value).toEqual(undefined);
    });
    it('clears all the cookie storage data', () => {
        const value = getCookie('time');
        expect(value).toEqual('' || undefined || null);
    });
});
