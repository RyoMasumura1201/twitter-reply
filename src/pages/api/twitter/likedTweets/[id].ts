import TwitterApi from 'twitter-api-v2';
import type { NextApiRequest, NextApiResponse } from 'next';

const client = new TwitterApi({
  appKey: process.env.TWITTER_CLIENT_ID,
  appSecret: process.env.TWITTER_CLIENT_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});
export default async function fetchLikes(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const likedTweets = await client.v2.userLikedTweets(String(id));

  console.log(likedTweets.tweets);

  return res.status(200).json([likedTweets]);
}
