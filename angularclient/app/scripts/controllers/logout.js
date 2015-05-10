'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularfireApp
 */
app
  .controller('LogoutCtrl', ['$window', '$scope', 'fbService', '$rootScope',
    function ($scope, $window, fbService, $rootScope) {
      ;
      console.log('login controller');
      console.log($window.authData);
      if (typeof $window.authData !== 'undefined') {
        fbService.logout($scope, '/');
      }
    }]
);

