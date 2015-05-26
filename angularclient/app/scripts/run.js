'use strict';
/**
 * @ngdoc overview
 * @name angularclient:run
 * @description
 * # run.js
 */
angular.module('angularfireApp')
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      //console.log('interceptor executing...');
      if (next.resetCredentials) {
        $rootScope.authData = undefined;
      }
      if (next.loginRequired && typeof $rootScope.authData === 'undefined') {
        event.defaultPrevented=true;
        //console.log('interceptor redirected to authwithpassword');
        $location.path('/authwithpassword');
      }
      //else if (typeof $rootScope.authData !== 'undefined') {
      //  console.log('user logged ' + $rootScope.authData.password.email);
      //} else {
      //  console.log('authData not required for this view');
      //}
    });
  }]);
