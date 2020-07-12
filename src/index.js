const functions = require('./functions');

const searchAndRetweet = () => {
  functions
    .searchLastTweetIdWithHastag('#flutter')
    .on('start', (_) => console.log('Listening...'))
    .on('data', ({ id_str }) => functions.retweetLatest(id_str));
};

searchAndRetweet();
console.log('App started');
