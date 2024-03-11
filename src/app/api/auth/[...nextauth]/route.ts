import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../../lib/prisma';
import { comparePassword } from '@/lib/utils';
import NextAuth from 'next-auth/next';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prisma.company.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        // console.log(user);

        if (!user) {
          return null;
        }

        const isMatch = await comparePassword(
          credentials?.password!!,
          user.password
        );

        if (isMatch) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    newUser: '/auth/signup',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // console.log(token);
      // console.log('-----');
      // console.log(account);
      // console.log('-----');
      // console.log(user);

      if (account) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token, user }) {
      // console.log(session); // without id: e.g. { user: { name: 'Saddam', email: 'saddam@gmail.com', image: undefined }, expires: '2024-04-09T06:24:12.334Z' }
      // console.log(session.user.id); // undefined
      session.user.id = token.id; // session.user.id value assignment. the user id of session.user.id is defined inside next-auth.d.ts file
      // console.log(session.user.id); // e.g. cltfajg5i000k8iw8ge8qbzoy
      // console.log(session); // with id: e.g. { user: { name: 'Saddam', email: 'saddam@gmail.com', image: undefined, id: 'cltfajg5i000k8iw8ge8qbzoy' }, expires: '2024-04-09T06:24:12.334Z' }
      // console.log('-------');

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
