import Layout from '@layout';
import Components from '@modules/activity/pages/components';

import { getSession } from 'next-auth/react';

import { useRouter } from 'next/router';

import { gqlGetActivity } from '@modules/activity/services/graphql';

import { useEffect } from 'react';

const Home = (props) => {
    const pageConfig = {
        title: 'Dashboard',
    };

    const router = useRouter();

    const [actGetActivity, { data, loading, error }] = gqlGetActivity();

    useEffect(() => {
        getSession().then(async (session) => {
            if (!session) {
                router.push('/auth/login');
            } else {
                await actGetActivity();
            }
        });
    }, [actGetActivity, router]);

    if (loading) {
        return (
            <Layout pageConfig={pageConfig}>
                <h1>Loading...</h1>
            </Layout>
        );
    }

    if (error) {
        router.push('/auth/login');
    }

    return (
        <Layout pageConfig={pageConfig}>
            <Components activityData={data && data.getActivity} {...props} />
        </Layout>
    );
};

export default Home;
