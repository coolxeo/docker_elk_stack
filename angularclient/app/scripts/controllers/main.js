'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('MainCtrl', ['$scope', 'rssFeederService', function ($scope, rssFeederService) {
    $scope.rssFeederServicePromise = function (queryTerm) {
      rssFeederService.getRssES(queryTerm).then(function (data) {
        $scope.news = data;
      }, function (error) {
        $scope.error = error;
      });
    };
    //we call the first time to get all results
    $scope.rssFeederServicePromise();
  }]);
