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
      .otherwise({redirectTo: '/main'});
  }])
  .run(['$rootScope', '$location', function ($rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function (event, next) {
      if (next.loginRequired && typeof $rootScope.token === 'undefined') {
        event.preventDefault();
        $location.path("/authWithPassword");
      }
    });
  }]);
