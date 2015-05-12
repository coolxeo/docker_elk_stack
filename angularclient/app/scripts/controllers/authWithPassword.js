'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('AuthWithPasswordCtrl', ['$scope', '$rootScope', 'fbService', 'ngNotify',
    function ($scope, $rootScope, fbService, ngNotify) {
      delete $rootScope.authData;
      $scope.authWithPassword = function (isValid) {
        if (isValid) {
          $scope.transparent = {opacity: 0.0};
          $scope.showme = true;
          fbService.authWithPassword($scope, $rootScope, '/');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
    }]);

