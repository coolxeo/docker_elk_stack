'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
app
  .controller('LogoutCtrl', ['$rootScope', '$scope', 'fbService', function ($scope, $rootScope, fbService) {
    console.log('i am here');
    if (typeof $rootScope.authData != 'undefined') {
      fbService.logout($scope, '/');
    }
  }]);

