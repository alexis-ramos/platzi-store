// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products',
  firebaseConfig: {
    apiKey: 'AIzaSyBwcWAzqam6UyosOfZd3UQPJDJfCdehHcQ',
    authDomain: 'platzi-store-5bae6.firebaseapp.com',
    databaseURL: 'https://platzi-store-5bae6.firebaseio.com',
    projectId: 'platzi-store-5bae6',
    storageBucket: 'platzi-store-5bae6.appspot.com',
    messagingSenderId: '37659374205',
    appId: '1:37659374205:web:4dff6aac76fda2e1eef714',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
