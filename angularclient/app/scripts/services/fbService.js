'use strict';
app
  .service('fbService', ['firebaseFactory', 'ngNotify', '$location', 'FB_USER',
    function (firebaseFactory, ngNotify, $location, FB_USER) {
      var ref = firebaseFactory.getFireBaseRef(FB_USER);
      var _redirect = function ($scope, $location, redirectTo) {
        if (typeof redirectTo != 'undefined') {
          console.log('redirecting to ' + redirectTo);
          $location.path(redirectTo);
        }
      };
      return {
        logout: function ($scope, redirectTo) {
          console.log('loggin out');
          ref.unauth();
          ngNotify.set('Good bye');
          _redirect($scope, $location, redirectTo);
        },
        resetPassword: function ($scope, $rootScope, redirectTo) {
          console.log('reseting password');
          ref.resetPassword({
            email: $scope.user.email
          }, function (error) {
            if (error) {
              ngNotify.set('Error resetting password:' + error);
            } else {
              ngNotify.set('Password reset email sent successfully!');
              _redirect($scope, $location, redirectTo);
            }
          });
        },
        authWithPassword: function ($scope, $rootScope, redirectTo) {
          console.log('authentication with password');
          ref.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              ngNotify.set('Login Failed ' + error);
            } else {
              //ref.changePassword(email, $scope.user.password, authData.password.password).then(null, function(error) {
              //  console.log(error);
              //});
              ngNotify.set('Authenticated successfully ' + authData.password.email);
              $rootScope.authData = authData;
              _redirect($scope, $location, redirectTo);
            }
          }, {
            remember: 'sessionOnly'
          });
        },
        createUser: function ($scope) {
          console.log('creating user');
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
