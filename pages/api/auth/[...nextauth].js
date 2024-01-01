import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { verifyPassword } from '@lib/auth';
import MongoDBConnection from '@lib/db';

import User from '@models/user';

export const authOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                await MongoDBConnection();

                const usersCollection = await User.findOne({
                    email: credentials.email,
                });

                if (!usersCollection) {
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    usersCollection.password
                );

                if (!isValid) {
                    throw new Error('Could not log you in!');
                }

                return {
                    email: usersCollection.email,
                    name: usersCollection.name,
                };
            },
        }),
    ],
};

export default NextAuth(authOptions);
