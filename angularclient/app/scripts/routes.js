'use strict';
/**
 * @ngdoc overview
 * @name angularclient:routes
 * @description
 * # routes.js
 */
angular.module('angularfireApp')
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
        controller: 'SignupCtrl'
      })
      .when('/reset', {
        templateUrl: 'views/reset.html',
        controller: 'ResetCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        loginRequired: true
      })
      .otherwise({redirectTo: '/main'});
  }])
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.loginRequired && typeof $rootScope.token === 'undefined') {
        event.preventDefault();
        $location.path("/login");
      }
    });
  }]);
