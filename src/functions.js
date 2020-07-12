const Twitter = require('twitter-lite');
require('dotenv').config();

const twit = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
});

const retweetLatest = (retweetId) => {
  return new Promise((resolve, reject) =>
    twit.post('statuses/retweet/' + retweetId, {}, (error, response) => {
      if (error) return reject(error);

      return resolve(response);
    })
  );
};

const searchLastTweetIdWithHastag = (hastag) =>
  twit.stream('statuses/filter', { track: hastag });

module.exports = {
  retweetLatest,
  searchLastTweetIdWithHastag,
};
