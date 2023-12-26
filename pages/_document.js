import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang={process.env.NEXT_PUBLIC_LANG}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
