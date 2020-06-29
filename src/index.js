const functions = require('./functions');

const searchAndRetweet = async () => {
  const lastId = await functions.searchLastTweetIdWithHastag('#flutter');
  console.log(await functions.retweetLatest(lastId));
};

setInterval(searchAndRetweet, 1000 * 59);
console.log('App started');
