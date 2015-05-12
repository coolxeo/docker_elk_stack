'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('ResetPasswordCtrl', ['$scope', '$rootScope', 'fbService', 'ngNotify',
    function ($scope, $rootScope, fbService, ngNotify) {
      delete $rootScope.authData;//TODO check what is wrong here
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          fbService.resetPassword($scope, $rootScope, '/login');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);

