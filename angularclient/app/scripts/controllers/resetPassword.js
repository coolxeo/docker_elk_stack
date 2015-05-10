'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('ResetPasswordCtrl', ['$scope', 'fbService', function ($scope, fbService) {
    $scope.resetPassword = function (isValid) {
      if (isValid) {
        fbService.resetPassword($scope);
      }
    };
  }]);

