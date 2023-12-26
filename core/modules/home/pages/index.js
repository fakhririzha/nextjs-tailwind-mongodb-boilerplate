import Layout from '@layout';
import Components from '@modules/home/pages/components';

import { handleCreateActivity } from '@modules/home/services';

import { getSession } from 'next-auth/react';

import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

const Home = (props) => {
    const pageConfig = {
        title: 'Dashboard',
    };

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(true);

    const formik = useFormik({
        initialValues: {
            name: '',
            location: '',
        },
        validationSchema: object().shape({
            name: string().required('Name is required'),
            location: string().required('Location is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await handleCreateActivity(values);
                console.log('Berhasil membuat aktivitas baru!');
                resetForm();
            } catch (error) {
                console.log(error);
                console.log('Gagal membuat aktivitas baru');
            }
        },
    });

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
            <Components formik={formik} {...props} />
        </Layout>
    );
};

export default Home;
