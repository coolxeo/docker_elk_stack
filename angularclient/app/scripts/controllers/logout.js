'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the angularfireApp
 */
app
  .controller('LogoutCtrl', ['$rootScope', '$scope', 'fbService',
    function ($scope, $rootScope, fbService) {
      if (typeof $rootScope.authData != 'undefined') {
        fbService.logout($scope, $rootScope, '/');
      }
    }]
);

