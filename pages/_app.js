import Layout from '@layout';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

import { clsx } from 'clsx/lite';

import { SessionProvider, useSession } from 'next-auth/react';

// import { ApolloProvider } from '@apollo/client';
import ApolloProviderWrapper from '@lib/graphql/client';

import '@styles/globals.css';

const AuthWrapper = ({ children }) => {
    const pageConfig = {
        title: 'Loading...',
    };

    const router = useRouter();

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/auth/login');
        },
    });

    if (status === 'loading') {
        return (
            <Layout pageConfig={pageConfig}>
                <div>Loading...</div>
            </Layout>
        );
    }

    return children;
};

const App = (props) => {
    const {
        Component,
        pageProps: { session, ...pageProps },
    } = props;

    return (
        <SessionProvider session={session} refetchInterval={5 * 60}>
            {/* <ApolloProvider client={client}> */}
            <ApolloProviderWrapper>
                {Component.auth ? (
                    <AuthWrapper>
                        <Component
                            {...pageProps}
                            className={clsx(
                                inter.className,
                                'light',
                                'text-foreground',
                                'bg-background'
                            )}
                        />
                        <Analytics />
                        <SpeedInsights />
                        <style jsx global>
                            {`
                                html {
                                    font-family: ${inter.style.fontFamily};
                                }
                            `}
                        </style>
                    </AuthWrapper>
                ) : (
                    <>
                        <Component
                            {...pageProps}
                            className={clsx(
                                inter.className,
                                'light',
                                'text-foreground',
                                'bg-background'
                            )}
                        />
                        <Analytics />
                        <SpeedInsights />
                        <style jsx global>
                            {`
                                html {
                                    font-family: ${inter.style.fontFamily};
                                }
                            `}
                        </style>
                    </>
                )}
            </ApolloProviderWrapper>
        </SessionProvider>
    );
};

export default App;
