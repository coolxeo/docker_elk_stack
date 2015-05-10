'use strict';

app
  .service('rssFeederService', ['esClient', '$q', 'ES_IP', 'ES_PORT',
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
          esClient.getElasticSearchRef(ES_IP, ES_PORT)
            .search(this._query(queryTerm || '*')).then(function (resp) {
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


