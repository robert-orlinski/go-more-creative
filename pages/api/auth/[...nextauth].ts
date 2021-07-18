import NextAuth, { Session, User } from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.OAUTH_APP_ID,
      clientSecret: process.env.OAUTH_APP_SECRET,
      scope: '',
    }),
  ],
  callbacks: {
    session: async (session: Session, user: User) => {
      session.user.id = user.id;

      return Promise.resolve(session);
    },
  },
  database: process.env.DATABASE_URL,
});
