module.exports = function (elasticSearchClient,next) {
    try {
        var qryObj = {
            "query": {
                "term": {"id": 32}
            }
        };

        elasticSearchClient.search('rssnews4', 'rssnew4', qryObj, function(err, data){
            console.log(JSON.parse(data));
            next(null,data);
        });

    } catch (e) {
        console.log(e);
    }
};