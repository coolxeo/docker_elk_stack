'use strict';

app
  .factory('firebaseRefFactory', function () {
    return {
      getFireBaseRef: function (fireBaseUser, params) {
        return new Firebase(('https://' + fireBaseUser + '.firebaseio.com' + (params ? params : ' ')).trim())
      }
    };
  }
);

app
  .factory('esClient', ['esFactory', function (esFactory) {
    return {
      getElasticSearchRef: function (ip, port) {
        return esFactory({
          host: 'http://' + ip + ':' + port,//http://dockerIp:elasticSearchPort to access elastic search 172.17.42.1:9200
          log: 'trace'
        });
      }
    };
  }]
);

//THIS IS NOT USED YET, i will use it for the chat service
app
  .factory('firebaseItemsFactory', ['$firebaseObject', 'firebaseRefFactory', 'FB_USER',
    function ($firebaseObject, firebaseRefFactory, FB_USER) {
      return {
        set3WayDataBinding: function ($scope, bindName) {
          // download the data into a local object
          var syncObject = $firebaseObject(firebaseRefFactory.getFireBaseRef(F_B_USER, 'messages'));

          // synchronize the object with a three-way data binding
          syncObject.$bindTo($scope, bindName);//bindName='data'
        }
      };
    }]
);
