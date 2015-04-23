module.exports = function (elasticSearchClient,rssHandler,next) {
    try {
        rssHandler(collection,function(error,feeds){
            if (error){reply(error)}
            var i=0;
            feeds.forEach(function(feed){
                var commands = [];
                commands.push({ "index" : { "_index" :'rssnews4', "_type" : "rssnew4"} });
                //TODO refactor this part
                commands.push({
                    id:i++,
                    title: feed.title,
                    description: feed.description,
                    pubdate: feed.pubdate,
                    author: feed.author,
                    link: feed.link,
                    image:feed.image,
                    meta: {
                        title: feed.meta.title,
                        image: feed.meta.image?feed.meta.image.url:''
                    },
                    creationdate: feed.creationdate
                });
                elasticSearchClient.bulk(commands, {})
                    .on('data', function(data) {
                        console.log('Data!');
                        console.log(data);
                    })
                    .on('done', function(done){
                        console.log('Done!'+i);
                        console.log(done);
                        feeds.pop();
                    })
                    .on('error', function(error){
                        console.log('Error!');
                        console.log(error);
                    })
                    .exec();
                if(feeds.length==0){
                    next(null,'index bulk loaded');
                }
            });
        });
    } catch (e) {
        console.log(e);
    }
};