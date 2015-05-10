'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:RssFeederCtrl
 * @description
 * # RssFeederCtrl
 * Controller of the angularfireApp
 */
app
  .controller('RssFeederCtrl', ['$scope', 'rssFeederService', 'ngNotify', function ($scope, rssFeederService, ngNotify) {
    $scope.rssFeeder = function (queryTerm) {
      rssFeederService.rssFeeder(queryTerm).then(function (data) {
        $scope.news = data;
      }, function (e) {
        ngNotify.set(e);
      });
    };
    //we call the first time to get all results
    $scope.rssFeeder();
  }]);
