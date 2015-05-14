'use strict';

app
  .factory('esClientFactory', ['esFactory', function (esFactory) {
    return {
      getElasticSearchRef: function (ip, port) {
        return esFactory({
          host: 'http://' + ip + ':' + port,//http://dockerIp:elasticSearchPort to access elastic search 172.17.42.1:9200
          log: 'error'
        });
      }
    };
  }]
);