const functions = require('./functions');
const hastags = ['#flutter,#Flutterista,#Flutteristas, #flutterdev','#fluttercommunity'];

const searchAndRetweet = () => {
  functions
    .searchLastTweetIdWithHastag(hastags)
    .on('start', (_) => console.log('Listening...'))
    .on('data', ({ id_str }) => functions.retweetLatest(id_str));
};

searchAndRetweet();
console.log('App started');
