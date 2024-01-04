import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { useMemo } from 'react';

const httpLink = new HttpLink({
    uri: process.env.VERCEL_URL
        ? `${process.env.VERCEL_URL}/api/graphql`
        : process.env.NEXT_PUBLIC_URL_SERVER_GRAPHQL,
});

const ApolloProviderWrapper = ({ children }) => {
    const client = useMemo(() => {
        const authMiddleware = setContext(async (operation, { headers }) => {
            const { token } = await fetch('/api/auth/token').then((res) =>
                res.json()
            );

            return {
                headers: {
                    ...headers,
                    authorization: token ? `Bearer ${token}` : '',
                },
            };
        });

        return new ApolloClient({
            link: from([authMiddleware, httpLink]),
            cache: new InMemoryCache(),
        });
    }, []);

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
