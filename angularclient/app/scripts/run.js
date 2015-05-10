'use strict';
/**
 * @ngdoc overview
 * @name angularclient:run
 * @description
 * # run.js
 */
app
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.loginRequired && typeof $rootScope.authData === 'undefined') {
        event.preventDefault();
        $location.path("/authwithpassword");
      }
    });
  }]);
