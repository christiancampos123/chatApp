// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false, 
  firebase: { 
    apiKey: "AIzaSyATeneZ6vh9HILTtVCzOTTf_ns8hux8gj8",
    authDomain: "chatapp-3322c.firebaseapp.com",
    databaseURL: "https://chatapp-3322c.firebaseio.com",
    projectId: "chatapp-3322c",
    storageBucket: "chatapp-3322c.appspot.com",
    messagingSenderId: "921632205224"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.