'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller("SignupCtrl", ['$scope', '$rootScope', '$location','firebaseRef','ngNotify', function ($scope, $rootScope, $location, firebaseRef, ngNotify) {
    var randomizer = function () {var chars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];var password = '';for (var i = 0; i < 9; i += 1) {password += chars[Math.floor(Math.random() * chars.length)];}return password;};

    $scope.submit = function (isValid) {
      if (isValid) {
        firebaseRef.createUser({
          email: $scope.user.email,
          password: randomizer()
        }, function (error, userData) {
          if (error) {
            ngNotify.set('Error creating user:');
          } else {
            firebaseRef.resetPassword({
              email: $scope.user.email
            }, function (error) {
                if (error) {
                  switch (error.code) {
                    case "INVALID_USER":
                      ngNotify.set('The specified user account does not exist.');
                      break;
                    default:
                      ngNotify.set('Error resetting password:'+ error);
                  }
                } else {
                  ngNotify.set('Password reset email sent successfully! ');
                  $location.path("/");
                  $scope.$apply();
                }
            });
          }
        });
      } else {
        ngNotify.set('There are still invalid fields below');
      }
    };
  }]);
