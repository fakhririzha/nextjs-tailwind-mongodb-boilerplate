import Layout from '@layout';
import Components from '@modules/activity/pages/components';

import { handleGetActivity } from '@modules/activity/services';

import { getSession } from 'next-auth/react';

import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

const Home = (props) => {
    const pageConfig = {
        title: 'Dashboard',
    };

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [activityData, setActivityData] = useState([]);

    useEffect(() => {
        getSession().then(async (session) => {
            if (!session) {
                router.push('/auth/login');
            } else {
                setIsLoading(false);
                const dataActivity = await handleGetActivity();
                setActivityData(dataActivity);
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
            <Components activityData={activityData} {...props} />
        </Layout>
    );
};

export default Home;
