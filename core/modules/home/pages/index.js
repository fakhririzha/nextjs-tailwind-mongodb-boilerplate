import Layout from '@layout';
import Components from '@modules/home/pages/components';

import { getSession } from 'next-auth/react';

import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

const Home = (props) => {
    const pageConfig = {
        title: 'Dashboard',
    };

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSession().then((session) => {
            if (!session) {
                router.push('/auth/login');
            } else {
                setIsLoading(false);
            }
        });
    }, [router]);

    if (isLoading) {
        return (
            <Layout pageConfig={pageConfig}>
                <h1>Loading...</h1>
            </Layout>
        );
    }

    return (
        <Layout pageConfig={pageConfig}>
            <Components {...props} />
        </Layout>
    );
};

export default Home;
