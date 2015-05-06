'use strict';

/**
* @ngdoc function
* @name angularfireApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the angularfireApp
*/
angular.module('angularfireApp')
  .controller('LoginCtrl',['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
    var ref = new Firebase("https://sloppylopez.firebaseio.com");

    var deferred = $q.defer();
    esClient.search(this.query(queryTerm||'*')).then(function (resp) {
      deferred.resolve(resp.hits.hits);
    }, function (err) {
      console.trace(err.message);
      deferred.reject();
    });
    return deferred.promise;

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
            $location.path( "/main" );
          }
        });
      }
    };
}]);

