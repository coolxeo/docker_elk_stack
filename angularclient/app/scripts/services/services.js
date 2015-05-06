'use strict';

/**
 * @ngdoc service
 * @name angularRssApp.rssFeederService
 * @description
 * # rssFeederService
 * Service in the angularRssApp.
 */
angular.module('angularfireApp')
  .service('rssFeederService',['esClient', '$q',
    function (esClient,$q) {
    return {
      query: function (queryTerm) {
        if(queryTerm==='*'){//TODO refactor this crap...
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
        }else{
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
      }, getRssES:function(queryTerm) {
        var deferred = $q.defer();
        esClient.search(this.query(queryTerm||'*')).then(function (resp) {
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

// esFactory() creates a configured client instance. Turn that instance
// into a service so that it can be required by other parts of the application
angular.module('angularfireApp')
  .service('esClient', ['esFactory',function (esFactory) {
    return esFactory({
      host: 'http://172.17.42.1:9200',
      log: 'trace'
    });
  }]);

//angular.module('angularfireApp')
//.factory('AuthService', ['$http','$q','Session',function ($http, $q, Session) {
//  var authService = {};
//  var firebase = new Firebase('https://sloppylopez.firebaseio.com/web/uauth');
//
//  authService.login = function (credentials) {
//    var deferred = $q.defer();
//    console.log(credentials);
//    firebase.authWithPassword(credentials, function onAuth(err, user) {
//      if (err) {
//        deferred.reject(err);
//      }
//
//      if (user) {
//        deferred.resolve(user);
//      }
//    });
//    return deferred.promise();
//    // Handle Email/Password login
//// returns a promise
////    function authWithPassword(credentials) {
////      var deferred = $.Deferred();
////      console.log(credentials);
////      rootRef.authWithPassword(credentials, function onAuth(err, user) {
////        if (err) {
////          deferred.reject(err);
////        }
////
////        if (user) {
////          deferred.resolve(user);
////        }
////
////      });
////
////      return deferred.promise();
////    }
//  };

  //authService.isAuthenticated = function () {
  //  return !!Session.userId;
  //};
  //
  //authService.isAuthorized = function (authorizedRoles) {
  //  if (!angular.isArray(authorizedRoles)) {
  //    authorizedRoles = [authorizedRoles];
  //  }
  //  return (authService.isAuthenticated() &&
  //  authorizedRoles.indexOf(Session.userRole) !== -1);
  //};
//
//  return authService;
//}])


//angularClient
//  .service('loginService',['esClient', '$q',
//    function (esClient,$q) {
//      return {
//        init: function (secret) {
//          return
//        },
//        authDataCallback:function authDataCallback(authData) {
//          if (authData) {
//            console.log("User " + authData.uid + " is logged in with " + authData.provider);
//          } else {
//            console.log("User is logged out");
//          }
//        }
//      };
//    }]
//);
