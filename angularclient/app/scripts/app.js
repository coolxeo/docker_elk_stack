'use strict';

/**
 * @ngdoc overview
 * @name angularclient
 * @description
 * # angularclient
 *
 * Main module of angularclient application.
 */
var angularClient=angular
  .module('angularClient', [
    'elasticsearch',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  }]);

angularClient.constant('FIREBASE_URL','https://sloppylopez.firebaseio.com');
