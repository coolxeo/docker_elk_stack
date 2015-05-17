'use strict';
angular.module('angularfireApp')
  .factory('firebaseServiceFactory', ['firebaseFactory', 'ngNotify', '$location', 'FB_USER', 'promiseService', '$q',
    function (firebaseFactory, ngNotify, $location, FB_USER, promiseService, $q) {
      var ref = firebaseFactory.getFireBaseRef(FB_USER);
      ngNotify.config({theme: 'pure', position: 'bottom', duration: 3000, type: 'info', sticky: false});

      var _redirect = function ($location, redirectTo) {//TODO put this in a service
        if (typeof redirectTo !== 'undefined') {
          //console.log('redirecting to ' + redirectTo);
          $location.path(redirectTo);
        }
      };
      return {
        logout: function ($scope, redirectTo) {
          //console.log('loggin out');
          ref.unauth();
          ngNotify.set('Good bye');
          _redirect($location, redirectTo);
        },
        resetPassword: function ($scope, redirectTo) {
          //console.log('reseting password');
          ref.resetPassword({
            email: $scope.user.email
          }, function (error) {
            if (error) {
              ngNotify.set('Error resetting password:' + error);
            } else {
              ngNotify.set('Password reset email sent successfully!');
              _redirect($location, redirectTo);
            }
          });
        },
        authWithPassword: function ($scope, $rootScope, redirectTo) {
          //console.log('authentication with password');
          ref.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              ngNotify.set('Login Failed ' + error);
              promiseService.reject($q, error);
            } else {
              //ref.changePassword(email, $scope.user.password, authData.password.password).then(null, function(error) {
              //  console.log(error);
              //});
              ngNotify.set('Authenticated successfully ' + authData.password.email);
              $rootScope.authData = authData;
              promiseService.resolve($q, authData);
            }
            $scope.showme = false;
            _redirect($location, redirectTo);
          }, {
            remember: 'sessionOnly'
          });
        },
        createUser: function ($scope) {
          //console.log('creating user');
          var that = this;
          ref.createUser({
            email: $scope.user.email,
            password: this._randomizer()
          }, function (error, authData) {
            if (error) {
              ngNotify.set(error);
            } else {
              that.resetPassword($scope);//for being able to reference 'this' here, we need to pass it in a variable called 'that' because 'this' is null when executing the callback
            }
            return error || authData;
          });
        },
        _randomizer: function () {
          var chars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];
          var randomString = '';
          for (var i = 0; i <= 10; i++) {
            randomString += chars[Math.floor(Math.random() * chars.length)];
          }
          return randomString;
        }
      };
    }]
);
