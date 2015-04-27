'use strict';

/**
 * @ngdoc function
 * @name angularRssApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularRssApp
 */
angularClient
  .controller('AboutCtrl',  ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
