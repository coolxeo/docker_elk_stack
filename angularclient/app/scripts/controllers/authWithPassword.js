'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('AuthWithPasswordCtrl', ['$scope', '$rootScope', 'firebaseServiceFactory', 'ngNotify',
    function ($scope, $rootScope, firebaseServiceFactory, ngNotify) {
      $scope.authWithPassword = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.authWithPassword($scope, $rootScope, '/')
            .then(function () {
              $scope.showme = true;
            })
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
    }]);

