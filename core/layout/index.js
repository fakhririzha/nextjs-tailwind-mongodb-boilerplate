import dynamic from 'next/dynamic';
import Head from 'next/head';

import { clsx } from 'clsx/lite';

const Header = dynamic(() => import('@layout/header', { ssr: false }));
const Footer = dynamic(() => import('@layout/footer', { ssr: true }));

const Layout = (props) => {
    const {
        includeHeader = true,
        includeFooter = true,
        pageConfig = {
            title: 'Page Title',
        },
        children,
    } = props;

    return (
        <>
            <Head>
                <title>{pageConfig.title}</title>
            </Head>
            {includeHeader ? <Header /> : null}
            <main className={clsx('desktop:min-h-[100vh]')}>{children}</main>
            {includeFooter ? <Footer /> : null}
        </>
    );
};

export default Layout;
