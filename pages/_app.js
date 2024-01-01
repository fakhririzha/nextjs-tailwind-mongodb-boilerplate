import Layout from '@layout';

import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

import { clsx } from 'clsx/lite';

import '@styles/globals.css';
import { SessionProvider, useSession } from 'next-auth/react';

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
                    <style jsx global>
                        {`
                            html {
                                font-family: ${inter.style.fontFamily};
                            }
                        `}
                    </style>
                </>
            )}
        </SessionProvider>
    );
};

export default App;
