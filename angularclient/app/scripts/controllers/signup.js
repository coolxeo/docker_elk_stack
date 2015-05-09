'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller("SignupCtrl", ['$scope','ngNotify','fbService', function ($scope, ngNotify, fbService) {
    $scope.signup = function (isValid) {
      if (isValid) {
        fbService.createUser($scope);
      } else {
        ngNotify.set('There are still invalid fields below');
      }
    };
  }]);
