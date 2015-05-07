'use strict';
/**
 * @ngdoc overview
 * @name angularclient:routes
 * @description
 * # routes.js
 */
angular.module('angularfireApp')
  // configure views; whenAuthenticated adds a resolve method to ensure users authenticate
  // before trying to access that route
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        access: {
          requiresLogin: true
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        access: {
          requiresLogin: true
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        access: {
          requiresLogin: true
        }
      })
      .otherwise({redirectTo: '/login'});
  }])
  .run(['$rootScope','$location',function ($rootScope,$location) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      var requireLogin = next.access?next.access.requiresLogin:false;

      if (requireLogin && typeof $rootScope.token === 'undefined') {
        event.preventDefault();
        $location.path( "/login" );
      }
    });
  }]);
