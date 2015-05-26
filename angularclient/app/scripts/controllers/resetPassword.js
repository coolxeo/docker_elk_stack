'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('ResetPasswordCtrl', ['$scope', 'firebaseServiceFactory', 'ngNotify', 'redirectService',
    function ($scope, firebaseServiceFactory, ngNotify, redirectService) {
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.resetPassword($scope)
            .then(function () {
              redirectService.redirectTo('/login');
            });
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);

