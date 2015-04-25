'use strict';

/**
 * @ngdoc overview
 * @name angularClient
 * @description
 * # angularClient
 *
 * Main module of angularClient application.
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
        redirectTo: '/'
      });
  });

angularClient.constant('FIREBASE_URL','https://sloppylopez.firebaseio.com')
