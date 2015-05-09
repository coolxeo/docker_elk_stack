'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('ResetCtrl', ['$scope', 'fbService', function ($scope, fbService) {
    $scope.reset = function (isValid) {
      if (isValid) {
        fbService.reset($scope);
      }
    };
  }]);

