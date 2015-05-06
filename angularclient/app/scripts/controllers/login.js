'use strict';

/**
* @ngdoc function
* @name angularfireApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularfireApp
*/
angular.module('angularfireApp')
  .controller('LoginCtrl',['$scope', function ($scope) {
    var ref = new Firebase("https://sloppylopez.firebaseio.com");
    $scope.submit = function(isValid) {
      if(isValid){
        ref.authWithPassword({
          email    : $scope.login.user.username,
          password : $scope.login.user.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            model.message = "Login Failed!" + error;
          } else {
            console.log("Authenticated successfully with payload:", authData);
            model.message = "Authenticated successfully with payload:"+authData;
          }
        });
      }
    };
}]);

