'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:CreateUserCtrl
 * @description
 * # CreateUserCtrl
 * Controller of the angularfireApp
 */
app
  .controller('CreateUserCtrl', ['$scope', '$rootScope', 'ngNotify', 'firebaseServiceFactory',
    function ($scope, $rootScope, ngNotify, firebaseServiceFactory) {
      $scope.createUser = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.createUser($scope, $rootScope);
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
  }]);
