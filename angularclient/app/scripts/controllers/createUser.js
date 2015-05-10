'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:CreateUserCtrl
 * @description
 * # CreateUserCtrl
 * Controller of the angularfireApp
 */
app
  .controller("CreateUserCtrl", ['$scope','ngNotify','fbService', function ($scope, ngNotify, fbService) {
    $scope.createUser = function (isValid) {
      if (isValid) {
        fbService.createUser($scope);
      } else {
        ngNotify.set('There are still invalid fields below');
      }
    };
  }]);
