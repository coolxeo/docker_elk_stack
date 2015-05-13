'use strict';

app
  .service('rssFeederService', ['esClientFactory', '$q', 'ES_IP', 'ES_PORT', 'ngNotify',
    function (esClientFactory, $q, ES_IP, ES_PORT, ngNotify) {
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
          esClientFactory.getElasticSearchRef(ES_IP, ES_PORT)
            .search(this._query(queryTerm || '*')).then(function (resp) {
              deferred.resolve(resp.hits.hits);
            }, function (err) {
              ngNotify.set(err.message);
              deferred.reject();
            });
          return deferred.promise;
        }
      };
    }]
);


