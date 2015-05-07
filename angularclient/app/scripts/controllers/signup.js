'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller("SignupCtrl", ['$scope',function($scope) {//TODO put ref in a service
  var ref = new Firebase("https://youfirebase.firebaseio.com");
  var randomizer = function () {
    var possibleChars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];
    var password = '';
    for (var i = 0; i < 16; i += 1) {
      password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    return password;
  };
  $scope.submit = function(isValid) {
    var tempPass=randomizer();
    if (isValid) {
      ref.createUser({
        email    : $scope.registration.user.username,
        password : tempPass
      }, function(error, userData) {
        if (error) {
          $rootScope.message = "Error creating user:" + error;
        } else {
          ref.resetPassword({
            email: $scope.registration.user.username
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
              $rootScope.message = "Password reset email sent successfully! "+tempPass;
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
