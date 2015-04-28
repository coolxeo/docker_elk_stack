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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'elasticsearch',
    'firebase'
  ])
  .config(function ($routeProvider) {
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
  });

angularClient.constant('FIREBASE_URL','https://sloppylopez.firebaseio.com');
