'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('LogOutCtrl', ['$rootScope', 'fbService', function ($rootScope, fbService) {
    $scope.logout = function () {
      if (typeof $rootScope.authData != 'undefined') {
        fbService.logout($scope);
      }
    };
  }]);

