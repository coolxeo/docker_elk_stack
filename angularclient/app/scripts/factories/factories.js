//app
//  .factory('ngNotifyFactory', ['ngNotify', function (ngNotify) {
//    return {
//      getConfiguredNotify: function (ip, port) {
//        return esFactory({
//          host: 'http://' + ip + ':' + port,//http://dockerIp:elasticSearchPort to access elastic search 172.17.42.1:9200
//          log: 'error'
//        });
//      }
//    };
//  }]
//);

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

//THIS IS NOT USED YET, i will use it for the chat service
app
  .factory('firebaseItemsFactory', ['$firebaseObject', 'firebaseFactory', 'FB_USER',
    function ($firebaseObject, firebaseFactory, FB_USER) {
      return {
        set3WayDataBinding: function ($scope, bindName) {
          // download the data into a local object
          var syncObject = $firebaseObject(firebaseFactory.getFireBaseRef(FB_USER, 'messages'));

          // synchronize the object with a three-way data binding
          syncObject.$bindTo($scope, bindName);//bindName='data'
        }
      };
    }]
);
