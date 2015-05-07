'use strict';

/**
 * @ngdoc service
 * @name angularRssApp.rssFeederService
 * @description
 * # rssFeederService
 * Service in the angularRssApp.
 */
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
  .service('firebaseRef', function () {
    return new Firebase("https://yourfirebase.firebaseio.com");
  }
);

// esFactory() creates a configured client instance. Turn that instance
// into a service so that it can be required by other parts of the application
angular.module('angularfireApp')
  .service('esClient', ['esFactory', function (esFactory) {
    return esFactory({//docker ip
      host: 'http://172.17.42.1:9200',
      log: 'trace'
    });
  }]);
