'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'firebaseRef', 'ngNotify',
    function ($scope, $rootScope, $location, firebaseRef, ngNotify) {
      $scope.submit = function (isValid) {
        if (isValid) {
          firebaseRef.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              console.log("Login Failed!", error);
              ngNotify.set('Login Failed!');
            } else {
              ngNotify.set('Authenticated successfully ' + authData.password.email);
              $rootScope.token = authData.token;
              $location.path("/");
              $scope.$apply();
            }
          }, {
            remember: "sessionOnly"
          });
        }
      };
    }]);

