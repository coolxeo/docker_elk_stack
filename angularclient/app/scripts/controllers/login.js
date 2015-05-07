'use strict';

/**
* @ngdoc function
* @name angularfireApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularfireApp
*/
angular.module('angularfireApp')
  .controller('LoginCtrl',['$scope','$rootScope','$location','$q', function ($scope,$rootScope,$location,$q) {
    var ref = new Firebase("https://sloppylopez.firebaseio.com");//TODO refactor this to a service

    $scope.submit = function(isValid) {
      if(isValid){
        ref.authWithPassword({
          email    : $scope.user.email,
          password : $scope.user.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            $rootScope.message = "Login Failed!";
          } else {
            $rootScope.message = "Authenticated successfully "+authData.password.email;
            $rootScope.token=authData.token;
            $location.path("/");
            $scope.$apply();
          }
        });
      }
    };
}]);

