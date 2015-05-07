'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller("SignupCtrl", ['$scope','$rootScope','$location', function($scope,$rootScope,$location) {
  var ref = new Firebase("https://sloppylopez.firebaseio.com");//TODO put ref in a service
  var randomizer = function () {var chars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];var password = '';for (var i = 0; i < 9; i += 1) {password += chars[Math.floor(Math.random() * chars.length)];}return password;};

  $scope.submit = function(isValid) {
    if (isValid) {
      ref.createUser({
        email    : $scope.user.email,
        password : randomizer()
      }, function(error, userData) {
          if (error) {
            $rootScope.message = "Error creating user:" + error;
          } else {
            ref.resetPassword({
              email: $scope.user.email
            }, function(error) {
              if (error) {
                switch (error.code) {
                  case "INVALID_USER":
                    $rootScope.message = "The specified user account does not exist.";
                    break;
                  default:
                    $rootScope.message = "Error resetting password:" + error;
                }
              } else {
                $rootScope.message = "Password reset email sent successfully! ";
                $location.path("/");
                $scope.$apply();
              }
            });
            $rootScope.message = "Successfully created user account with uid:" + userData.uid;
          }
      });
    } else {
      $rootScope.message = "There are still invalid fields below";
    }
  };
}]);
