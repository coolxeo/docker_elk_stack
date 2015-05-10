'use strict';
app
  .service('fbService', ['firebaseRefFactory', 'ngNotify', '$location', '$rootScope', 'FB_USER',
    function (firebaseRefFactory, ngNotify, $location, $rootScope, FB_USER) {
      var ref = firebaseRefFactory.getFireBaseRef(FB_USER);

      function _redirectAndApply($scope, $location, redirectTo) {
        $location.path(redirectTo);
        if (!$scope.$$phase) {
          $scope.$apply();
        }
      }

      return {
        resetPassword: function ($scope, redirectTo) {
          ref.resetPassword({
            email: $scope.user.email
          }, function (error) {
            if (error) {
              switch (error.code) {
                case 'INVALID_USER':
                  ngNotify.set('The specified user account does not exist.');
                  break;
                default:
                  ngNotify.set('Error resetting password:' + error);
              }
            } else {
              ngNotify.set('Password reset email sent successfully!');
              _redirectAndApply($scope, $location, redirectTo);
            }
          });
        },
        authWithPassword: function ($scope, redirectTo) {
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
          ref.createUser({
            email: $scope.user.email,
            password: this._randomizer()
          }, function (error) {
            if (error) {
              ngNotify.set(error);
            } else {//we reset in case of success to force the firebase email account verification mechanism
              this.reset($scope);
            }
          });
        },
        logout: function ($scope, redirectTo) {
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
