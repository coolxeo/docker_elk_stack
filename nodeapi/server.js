// server.js
'use strict';
// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var esLoadHandler = require('./handlers/esLoadHandler.js');
var elasticSearch = require('elasticsearch');
var targets = require('./constants/targets.json');

//elastic search client minimum config , we use the docker ip in our host 'boot2docker ip for windows' or 'ifconfig for linux'
var esClient = new elasticSearch.Client({
    host: '172.17.42.1:9200',
    log: 'error'
});
//elastic search client min config
//elastic search client optional config
var rssOptions = {
    type: 'rss',
    orderBy: 'pubdate'
};

var esBulkAction=function(feed,rssOptions){
    return {index: {_index: feed.index, _type: rssOptions.type, _id:feed.title}};
};
//with this function you can select the fields of the rss source feed you want to persist in EL,
// if you pass null it will get all the fields of the rss source by default
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
//elastic search client optional config

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8081/api)
router.get('/', function(req, res) {
    res.json({message: 'hooray!'});
});
// charge rss from targets.json in docker elastic search
router.get('/rssload', function(req, res) {
    esLoadHandler(targets, esClient, rssOptions, esBulkAction, mapper, function (error, feeds) {
        res.json(error ? error.message : undefined || feeds);
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server Node Api listening on port ' + port);