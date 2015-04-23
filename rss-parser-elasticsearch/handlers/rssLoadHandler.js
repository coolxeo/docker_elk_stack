var _ = require('lodash');
var moment = require('moment');
var normalize=function(feeds) {
    var miniFeeds=[];
    feeds.forEach(function(feed){
        miniFeeds.push(
            {
                title: feed.title,
                description: feed.description,
                pubdate: feed.pubdate,
                author: feed.author,
                link: feed.link,
                image:feed.image,
                meta: {
                    title: feed.meta.title,
                    image: feed.meta.image.url
                },
                creationdate: moment().format("YYYY-MM-DD HH:mm:ss Z")
            }
        );
    });
    return miniFeeds;
    //return miniFeeds.sort(function (a, b) {
    //    return new Date(b.pubdate) - new Date(a.pubdate);
    //});
};

module.exports = function (targets,ids,rq,async,FeedParser,collection,next) {
    var feeds=[],asyncTasks=[],req;
    try {
        ids.split(',').forEach(function (id) {
            if (targets[id]) {
                var feedparser = new FeedParser();
                asyncTasks.push(function (callback) {
                    req = rq(targets[id]);

                    req.on('error', function (error) {callback(error, null);});
                    feedparser.on('error', function (error) {callback(error, null);});

                    req.on('response', function (res) {
                        if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
                        this.pipe(feedparser);
                    });
                    feedparser.on('readable', function () {
                        var stream = this, item;
                        while (item = stream.read()) {
                            feeds.push(item);
                        }
                    });
                    feedparser.on('end', function () {
                        console.log('finished stream ' + id);
                        callback(null, feeds);
                    });
                });
            } else {
                console.log('not found ' + id);
            }
        });
        async.parallel(asyncTasks, function (err) {
            if (err) throw err;
            var count=0;
            _.clone(normalize(feeds)).forEach(function(feed){
                console.log(count+++') '+feed.pubdate+' '+feed.title);
                collection.updateOne({'_id':feed.title}, feed, {'upsert':true},function(err){
                    if (err){console.log(err);}
                    feeds.pop();
                    if(feeds.length==0){next(null, 'data updated correctly');}
                });
            });
        });
    } catch (e) {
        console.log(e);
    }
};