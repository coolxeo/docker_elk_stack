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
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        loginRequired: true
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        loginRequired: true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        loginRequired: true
      })
      .otherwise({redirectTo: '/main'});
  }])
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
      if (next.loginRequired && typeof $rootScope.token === 'undefined') {
        event.preventDefault();
        $location.path("/login");
      }
    });
  }]);
