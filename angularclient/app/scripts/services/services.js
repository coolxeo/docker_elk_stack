'use strict';

angular.module('angularfireApp')
  .factory('firebaseRefFactory', function () {
    return {
      getFireBaseRef:function(fireBaseUser,params){
        return new Firebase(('https://'+fireBaseUser+'.firebaseio.com'+(params?params:' ')).trim())
      }
    };
  }
);

angular.module('angularfireApp')
  .service('esClient', ['esFactory', function (esFactory) {
    return esFactory({
      host: 'http://172.17.42.1:9200',//http://dockerIp:elasticSearchPort to access elastic search
      log: 'trace'
    });
  }]
);

//THIS IS NOT USED YET, i will use it for the chat service
angular.module('angularfireApp')
  .factory('firebaseItemsFactory', ['$firebaseObject','firebaseRefFactory',function ($firebaseObject,firebaseRefFactory) {
    return {
      setThreeWayDataBinding:function($scope,bindName){
        // download the data into a local object
        var syncObject = $firebaseObject(firebaseRefFactory.getFireBaseRef('sloppylopez','messages'));

        // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, bindName);//bindName='data'
      }
    };
  }]
);

angular.module('angularfireApp')
  .service('rssFeederService', ['esClient', '$q',
    function (esClient, $q) {
      return {
        _query: function (queryTerm) {
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
        }, rssFeeder: function (queryTerm) {
          var deferred = $q.defer();
          esClient.search(this._query(queryTerm || '*')).then(function (resp) {
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
  .service('fbService', ['firebaseRefFactory', 'ngNotify', '$location', '$rootScope',
    function (firebaseRefFactory, ngNotify, $location, $rootScope) {
      var ref = firebaseRefFactory.getFireBaseRef('sloppylopez');
      return {
        resetPassword: function ($scope) {
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
              $location.path('/');
              $scope.$apply();
            }
          });
        },
        authWithPassword: function ($scope) {
          ref.authWithPassword({
            email: $scope.user.email,
            password: $scope.user.password
          }, function (error, authData) {
            if (error) {
              ngNotify.set('Login Failed ' + error);
            } else {
              ngNotify.set('Authenticated successfully ' + authData.password.email);
              $rootScope.authData = authData;
              $location.path('/');
              $scope.$apply();
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
