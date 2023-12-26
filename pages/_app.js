import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

import cx from 'classnames';

import { NextUIProvider } from '@nextui-org/system';

import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';

const App = (props) => {
    const {
        Component,
        pageProps: { session, ...pageProps },
    } = props;
    const router = useRouter();

    return (
        <SessionProvider session={session} refetchInterval={5 * 60}>
            <NextUIProvider navigate={router.push}>
                <Component
                    {...pageProps}
                    className={cx(
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
            </NextUIProvider>
        </SessionProvider>
    );
};

export default App;
