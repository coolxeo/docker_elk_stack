'use strict';

/**
 * @ngdoc function
 * @name angularRssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularRssApp
 */
angularRss
  .controller('MainCtrl', function ($scope,rssFeederService) {
    $scope.rssFeederServicePromise = function(queryTerm) {
      rssFeederService.getRssES(queryTerm).then(function (data) {
        $scope.news = data;
      }, function (error) {
        $scope.error=error;
      });
    };
    //we call the first time to get all results
    $scope.rssFeederServicePromise();
  });
