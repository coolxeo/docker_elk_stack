'use strict';

/**
 * @ngdoc overview
 * @name angularRssApp
 * @description
 * # angularRssApp
 *
 * Main module of the application.
 */
var angularRss=angular
  .module('angularRssApp', [
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
      .when('/', {
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

angularRss.constant('FIREBASE_URL','https://fiery-heat-YOURFIREBASE.firebaseio.com')
