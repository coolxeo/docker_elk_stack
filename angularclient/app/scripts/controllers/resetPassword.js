'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:ResetPasswordCtrl
 * @description
 * # ResetPasswordCtrl
 * Controller of the angularfireApp
 */
app
  .controller('ResetPasswordCtrl', ['$scope', '$rootScope', 'fbService', 'ngNotify',
    function ($scope, $rootScope, fbService, ngNotify) {
      $scope.resetPassword = function (isValid) {
        if (isValid) {
          fbService.resetPassword($scope, $rootScope, '/');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);

