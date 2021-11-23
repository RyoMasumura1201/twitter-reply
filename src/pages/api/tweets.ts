import Twitter from 'twitter';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = new Twitter({
  consumer_key: process.env.TWITTER_CLIENT_ID,
  consumer_secret: process.env.TWITTER_CLIENT_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
export default function tweets(req: NextApiRequest, res: NextApiResponse) {
  console.log('aaa');

  const params = { screen_name: 'nodejs' };
  client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
      console.log(tweets.length);
    } else {
      console.log('だめ');
    }
  });

  return res.status(200).json(tweets.length);
}
