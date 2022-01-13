const Twitter = require('twitter-lite');
require('dotenv').config();

const twit = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.TOKEN,
  access_token_secret: process.env.TOKEN_SECRET,
});

const usersBlocked = [
  'raja007','raja00710', 'teanpatriot007'
]

const retweetLatest = (retweetId) =>
  twit.post('statuses/retweet/' + retweetId, {});

const searchLastTweetIdWithHastag = (hastag) =>
  twit.stream('statuses/filter', { track: hastag });

const isUserAllowed = (username) => !usersBlocked.includes(username.toLowerCase()); 

module.exports = {
  retweetLatest,
  searchLastTweetIdWithHastag,
  isUserAllowed,
};
