'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('LoginCtrl', ['$scope', 'fbService',
    function ($scope, fbService) {
      $scope.login = function (isValid) {
        if (isValid) {
          fbService.login($scope);
        }
      };
    }]);

