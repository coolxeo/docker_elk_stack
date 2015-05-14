'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('ResetPasswordCtrl', ['$scope', '$rootScope', 'firebaseServiceFactory', 'ngNotify',
    function ($scope, $rootScope, firebaseServiceFactory, ngNotify) {
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.resetPassword($scope, $rootScope, '/login');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);

