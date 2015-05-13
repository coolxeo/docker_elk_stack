'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularfireApp
 */
app
  .controller('AuthWithPasswordCtrl', ['$scope', '$rootScope', 'firebaseServiceFactory', 'ngNotify',
    function ($scope, $rootScope, firebaseServiceFactory, ngNotify) {
      //delete $rootScope.authData;
      $scope.authWithPassword = function (isValid) {
        if (isValid) {
          $scope.showme = true;
          firebaseServiceFactory.authWithPassword($scope, $rootScope, '/');
        } else {
          ngNotify.set('There are still invalid fields below');
        }
      };
    }]);

