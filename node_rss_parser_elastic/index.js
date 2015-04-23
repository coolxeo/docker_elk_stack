var Hapi = require('hapi');
var Good = require('good');
var rssasticSearch = require('./handlers/esLoadHandler.js');
var targets = require('./constants/targets.json');
var mocks = require('./mocks/');
var server = new Hapi.Server();

//elastica search
var elasticsearch = require('elasticsearch');
var esClient = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'error'
});

var rssasticOptions={
    type: 'rss',
    orderBy: 'pubdate'
};

var esBulkAction=function(feed,rssasticOpts){
    return {index: {_index: feed.index, _type: rssasticOpts.type, _id:feed.title}};
};

var mapper = function (rss) {
    return {
        index: rss.index,
        title: rss.title,
        description: rss.description,
        pubdate: rss.pubdate,
        author: rss.author,
        link: rss.link,
        image: rss.image,
        meta: {
            title: rss.meta.title,
            image: rss.meta.image ? rss.meta.image.url : ''
        }
    };
};

//connect to server hapi
server.connection({
    host : 'localhost',
    port: 3000,
    routes: {cors: true}
});

//routes
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Welcome!');
    }
});

server.route({
    method: 'GET',
    path: '/rssload',
    handler: function (request, reply) {
        rssasticSearch(targets,esClient,rssasticOptions,esBulkAction,mapper,function(error,feeds){
            reply(error||feeds);
        });
    }
});
//adding plug in Good for logging
server.register({
    register: Good,
    options: {
        reporters: [{
            reporter: require('good-console'),
            args:[{ log: '*', response: '*' }]
        }]
    }
}, function (err) {
    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start(function () {
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});