'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularfireApp
 */
app
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
