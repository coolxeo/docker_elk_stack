"use strict";

/**
 * @ngdoc function
 * @name angularfireApp.controller:AuthWithPasswordCtrl
 * @description
 * # AuthWithPasswordCtrl
 * Controller of the angularfireApp
 */
angular.module("angularfireApp")
  .controller("AuthWithPasswordCtrl", ["$scope", "$rootScope", "ngNotify", "firebaseServiceFactory",
    function ($scope, $rootScope, ngNotify, firebaseServiceFactory) {
      $scope.createUser = function (isValid) {
        if (isValid) {
          firebaseServiceFactory.createUser($scope, $rootScope);
        } else {
          ngNotify.set("There are still invalid fields below");
        }
      }
    }])

