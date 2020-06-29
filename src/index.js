const functions = require('./functions');

const searchAndRetweet = () => {
  functions
    .searchLastTweetIdWithHastag('#flutter')
    .on('tweet', ({ id_str }) =>
      functions.retweetLatest(id_str).catch((err) => console.log(err))
    );
};

searchAndRetweet();
console.log('App started');
