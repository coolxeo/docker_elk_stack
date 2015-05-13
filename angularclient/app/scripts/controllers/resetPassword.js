'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
app
  .controller('ResetPasswordCtrl', ['$scope', '$rootScope', 'firebaseServiceFactory', 'ngNotify',
    function ($scope, $rootScope, firebaseServiceFactory, ngNotify) {
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          fbServiceFactory.resetPassword($scope, $rootScope, '/login');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);

