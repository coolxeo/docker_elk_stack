'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('ResetPasswordCtrl', ['$scope', 'firebaseServiceFactory', 'ngNotify',
    function ($scope, firebaseServiceFactory, ngNotify) {
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.resetPassword($scope, '/login');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);

