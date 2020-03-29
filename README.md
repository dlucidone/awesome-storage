# Awesome-Storage

 Storage utility to work with Local Storage and Cookies

### Installation

```sh
$ npm install awesome-storage
import { localStorage, cookieStorage } from "awesome-storage";
```


### Using the lib

##### Local Storage Utility

```
import { localStorage } from "awesome-storage";
 
localStorage.getLocalStorageData() - Get the data from the local storage for corresponding key
localStorage.setLocalStorageData() - Set the data in the local storage with key and value respectively
localStorage.clearLocalStorageData() - Clear all the local storage data
```

##### Cookie Storage Utility


```
import { cookieStorage } from "awesome-storage";
 
cookieStorage.getCookie() - Get cookie data by name
cookieStorage.clearCookieStorageData() - Clear all the cookie storage data 
```