
var Twitter = require('twitter');

var client = new Twitter({
  // consumer_key: '.....',
  // consumer_secret: '....',
  // access_token_key: '....',
  // access_token_secret: '....'
});

module.exports = {
    seeResults: function (req, res) {
        var query = req.url.match(/[^=]+$/)[0];
        client.get('search/tweets', {q: query}, function(error, tweets, response) {
            var status = tweets.statuses;
            res.end(JSON.stringify(status));
        });
    }
}
