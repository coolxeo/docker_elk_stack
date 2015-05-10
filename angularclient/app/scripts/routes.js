'use strict';
/**
 * @ngdoc overview
 * @name angularclient:routes
 * @description
 * # routes.js
 */
app
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/rssfeeder', {
        templateUrl: 'views/rssFeeder.html',
        controller: 'RssFeederCtrl',
        loginRequired: true
      })
      .when('/authwithpassword', {
        templateUrl: 'views/authWithPassword.html',
        controller: 'AuthWithPasswordCtrl'
      })
      .when('/createuser', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateUserCtrl'
      })
      .when('/resetpassword', {
        templateUrl: 'views/resetPassword.html',
        controller: 'ResetPasswordCtrl'
      })
      .when('/logout', {
        controller: 'LogoutCtrl',
        templateUrl: 'views/authWithPassword.html',
        loginRequired: true
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        loginRequired: true
      })
      .otherwise({redirectTo: '/rssfeeder'});
  }]);
