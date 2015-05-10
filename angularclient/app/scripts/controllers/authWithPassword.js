'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('AuthWithPasswordCtrl', ['$scope', 'fbService',
    function ($scope, fbService) {
      $scope.authWithPassword = function (isValid) {
        if (isValid) {
          fbService.authWithPassword($scope, '/');
        }
      };
    }]);

