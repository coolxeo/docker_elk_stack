'use strict';

angular.module('angularfireApp')
  .service('firebaseRef', function () {
    return new Firebase('https://sloppylopez.firebaseio.com');
  }
);

angular.module('angularfireApp')
  .service('esClient', ['esFactory', function (esFactory) {
    return esFactory({
      host: 'http://172.17.42.1:9200',//http://dockerIp:elasticSearchPort to access elastic search
      log: 'trace'
    });
  }]);

angular.module('angularfireApp')
  .service('rssFeederService', ['esClient', '$q',
    function (esClient, $q) {
      return {
        query: function (queryTerm) {
          if (queryTerm === '*') {//TODO refactor this crap...
            return {
              index: '_all',
              type: 'rss',
              size: 200,
              body: {
                sort: [{
                  'pubdate': {'order': 'desc'}
                }],
                query: {
                  match_all: {}
                }
              }
            };
          } else {
            return {
              index: '_all',
              type: 'rss',
              size: 200,
              body: {
                sort: [{
                  'pubdate': {'order': 'desc'}
                }],
                query: {
                  match: {
                    title: queryTerm
                  }
                }
              }
            };
          }
        }, getRssES: function (queryTerm) {
          var deferred = $q.defer();
          esClient.search(this.query(queryTerm || '*')).then(function (resp) {
            deferred.resolve(resp.hits.hits);
          }, function (err) {
            console.trace(err.message);
            deferred.reject();
          });
          return deferred.promise;
        }
      };
    }]
);

angular.module('angularfireApp')
  .service('fbService', ['firebaseRef', 'ngNotify', '$location', '$rootScope',
    function (firebaseRef, ngNotify, $location, $rootScope) {
      return {
        reset: function ($scope) {
          firebaseRef.resetPassword({
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
              $location.path('/');
              $scope.$apply();
            }
          });
        },
        login: function ($scope) {
          firebaseRef.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              ngNotify.set('Login Failed ' + error);
            } else {
              ngNotify.set('Authenticated successfully ' + authData.password.email);
              $rootScope.token = authData.token;
              $location.path('/');
              $scope.$apply();
            }
          }, {
            remember: 'sessionOnly'
          });
        },
        createUser: function ($scope) {
          firebaseRef.createUser({
            email: $scope.user.email,
            password: this.randomizer()
          }, function (error) {
            if (error) {
              ngNotify.set(error);
            } else {//we reset in case of success to force the firebase email account verification mechanism
              this.reset($scope);
            }
          });
        },
        randomizer: function () {
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
