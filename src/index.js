const functions = require('./functions');
const hastags = '#flutter,#Flutterista,#Flutteristas,#flutterdev, #fluttercommunity, #FlutterEngage';

const searchAndRetweet = () => {
  functions
    .searchLastTweetIdWithHastag(hastags)
    .on('start', (_) => console.log('Listening...'))
    .on('data', (tweet) => {
      if (functions.isUserAllowed(tweet.user.screen_name)) {
        functions.retweetLatest(tweet.id_str);
      }

    });
};

searchAndRetweet();
console.log('App started');
