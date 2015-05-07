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
    var ref = new Firebase("https://yourfirebase.firebaseio.com");

    $scope.submit = function(isValid) {
      if(isValid){
        ref.authWithPassword({
          email    : $scope.user.username,
          password : $scope.user.password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            $scope.message = "Login Failed!" + error;
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $scope.message = "Authenticated successfully with payload:"+authData;
            $rootScope.token=authData.token;
            $location.path("/");
            $scope.$apply();
          }
        });
      }
    };
}]);

