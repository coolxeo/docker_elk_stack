'use strict';

/**
 * @ngdoc function
 * @name angularfireApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularfireApp
 */
angular.module('angularfireApp')
  .controller('AboutCtrl', ['$scope', function ($scope, test1, test2, test3, test4, test5, test6) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ]
  }])
