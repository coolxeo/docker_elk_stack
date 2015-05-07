'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'firebaseRef',
    function ($scope, $rootScope, $location, firebaseRef) {
      $scope.submit = function (isValid) {
        if (isValid) {
          firebaseRef.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              console.log("Login Failed!", error);
              $rootScope.message = "Login Failed!";
            } else {
              $rootScope.message = "Authenticated successfully " + authData.password.email;
              $rootScope.token = authData.token;
              $location.path("/");
              $scope.$apply();
            }
          });
        }
      };
    }]);

