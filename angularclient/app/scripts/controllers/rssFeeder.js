'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:RssFeederCtrl
 * @description
 * # RssFeederCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('RssFeederCtrl', ['$scope', 'rssFeederService',
    function ($scope, rssFeederService) {
      $scope.rssFeeder = function (queryTerm) {
        rssFeederService.rssFeeder(queryTerm)
          .then(function (data) {
            $scope.news = data || {};
          });
      };
      //we call the first time to get all results from elastic search
      $scope.rssFeeder();
    }]);
