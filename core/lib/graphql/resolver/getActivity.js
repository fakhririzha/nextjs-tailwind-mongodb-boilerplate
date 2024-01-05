import { GraphQLError } from 'graphql';
import fetch from 'isomorphic-unfetch';
import { decode } from 'next-auth/jwt';

const getActivity = async (parent, args, context) => {
    try {
        const { authorization, cookie } = context.req.headers;

        if (!authorization) {
            throw new GraphQLError(
                'You have to be logged in to access this data',
                {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                        http: { status: 401 },
                        stacktrace: null,
                    },
                }
            );
        }

        const token = await decode({
            token: authorization.split('Bearer ')[1],
            secret: process.env.NEXTAUTH_SECRET,
        });

        if (!token) {
            throw new GraphQLError(
                'You do not have a permission to access this data',
                {
                    extensions: {
                        code: 'UNAUTHORIZED',
                        http: { status: 403 },
                        stacktrace: null,
                    },
                }
            );
        }

        const res = await fetch(
            process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}/api/activity`
                : 'http://localhost:3000/api/activity',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: authorization,
                    cookie: cookie,
                },
            }
        );

        const resJson = await res.json();

        console.log('resJson', resJson);

        return resJson;
    } catch (error) {
        return error;
    }
};

export default getActivity;
