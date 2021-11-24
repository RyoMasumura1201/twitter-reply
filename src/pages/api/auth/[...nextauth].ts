import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { SessionWithUserId } from 'type';

export default NextAuth({
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(_user, _account, _profile) {
      console.log('signIn!');
      return true;
    },
    async redirect(url, baseUrl) {
      console.log('redirect!');
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async session(session: SessionWithUserId, user) {
      session.accessToken = user.accessToken;
      session.user.id = `${user.sub}`;
      return Promise.resolve(session);
    },
  },
});
