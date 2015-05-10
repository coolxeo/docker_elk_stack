'use strict';
app
  .service('fbService', ['firebaseFactory', 'ngNotify', '$location', 'FB_USER',
    function (firebaseFactory, ngNotify, $location, FB_USER) {
      var ref = firebaseFactory.getFireBaseRef(FB_USER);
      var _redirectAndApply = function ($scope, $location, redirectTo) {
        if (typeof redirectTo != 'undefined') {
          $location.path(redirectTo);
          if (!$scope.$$phase) {
            $scope.$apply();
          }
        }
      };
      return {
        resetPassword: function ($scope, $rootscope, redirectTo) {
          ref.resetPassword({
            email: $scope.user.email
          }, function (error) {
            if (error) {
              ngNotify.set('Error resetting password:' + error);
            } else {
              ngNotify.set('Password reset email sent successfully!');
              $rootscope.authData = null;
              _redirectAndApply($scope, $location, redirectTo);
            }
          });
        },
        authWithPassword: function ($scope, $rootscope, redirectTo) {
          ref.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              ngNotify.set('Login Failed ' + error);
            } else {
              ngNotify.set('Authenticated successfully ' + authData.password.email);
              $rootScope.authData = authData;
              _redirectAndApply($scope, $location, redirectTo);
            }
          }, {
            remember: 'sessionOnly'
          });
        },
        createUser: function ($scope) {
          var that = this;
          ref.createUser({
            email: $scope.user.email,
            password: this._randomizer()
          }, function (error) {
            if (error) {
              ngNotify.set(error);
            } else {//we reset in case of success to force the firebase email account verification mechanism
              that.resetPassword($scope);//for being able to reference 'this' here, we need to pass it in a variable called 'that' because 'this' is null when executing the callback
            }
          });
        },
        logout: function ($scope, $rootScope, redirectTo) {
          ref.unauth();
          $rootScope.authData = undefined;
          ngNotify.set('Good bye');
          _redirectAndApply($scope, $location, redirectTo);
        },
        _randomizer: function () {
          var chars = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?_-'];
          var randomString = '';
          for (var i = 0; i <= 9; i++) {
            randomString += chars[Math.floor(Math.random() * chars.length)];
          }
          return randomString;
        }
      };
    }]
);
