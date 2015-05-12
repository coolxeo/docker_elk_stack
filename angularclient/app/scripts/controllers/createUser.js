'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:CreateUserCtrl
 * @description
 * # CreateUserCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller("CreateUserCtrl", ['$scope', '$rootScope', 'ngNotify', 'fbService',
    function ($scope, $rootScope, ngNotify, fbService) {
      $scope.createUser = function (isValid) {
        if (isValid) {
          fbService.createUser($scope, $rootScope);
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);
