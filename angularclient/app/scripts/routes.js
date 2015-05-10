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
      .when('/rssfeeder', {
        templateUrl: 'views/rssFeeder.html',
        controller: 'RssFeederCtrl',
        loginRequired: true
      })
      .when('/authWithPassword', {
        templateUrl: 'views/authWithPassword.html',
        controller: 'AuthWithPasswordCtrl'
      })
      .when('/createuser', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateUserCtrl',
        loginRequired: true
      })
      .when('/resetpassword', {
        templateUrl: 'views/resetPassword.html',
        controller: 'ResetPasswordCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        loginRequired: true
      })
      .otherwise({redirectTo: '/rssfeeder'});
  }])
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.loginRequired && typeof $rootScope.authData === 'undefined') {
        event.preventDefault();
        $location.path("/authWithPassword");
      }
    });
  }]);
