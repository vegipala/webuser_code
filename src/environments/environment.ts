
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseURL: 'https://grocery-api.vegipala.in/index.php/',
  mediaURL: 'https://grocery-api.vegipala.in/uploads/',
  onesignal: {
    appId: '46db3afd-fb8c-4f84-be63-09e556c1a2e7',
    googleProjectNumber: '168605593897',
    restKey: 'YzljNDU5OGEtMWJjMC00ZDk3LTk0MTctYmNmOGEzYzU3ZmNk'
  },
  general: {
    symbol: '₹',
    code: 'INR'
  },
  authToken: '123456789',
  social: {
    fb: 'https://www.facebook.com/vegipala/',
    insta: 'https://www.instagram.com/vegipala/',
    twitter: 'https://twitter.com/vegipala/',
    linkedIn: 'https://in.linkedin.com/company/vegipala/'
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
