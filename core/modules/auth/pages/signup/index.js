import Layout from '@layout';
import Components from '@modules/auth/pages/signup/components';

import { handleRegister } from '@modules/auth/services';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

const Home = (props) => {
    const pageConfig = {
        title: 'Sign Up',
    };

    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: object().shape({
            name: string().required('Name is required'),
            email: string()
                .email('Invalid email address')
                .required('Email is required'),
            password: string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await handleRegister(values, resetForm);

                const result = await signIn('credentials', {
                    redirect: false,
                    email: values.email,
                    password: values.password,
                });

                if (!result.error) {
                    resetForm();
                    console.log('registered and logged in', result);
                    router.replace('/');
                } else {
                    console.log(result.error);
                }
            } catch (err) {
                console.log(err);
            }
        },
    });

    return (
        <Layout pageConfig={pageConfig}>
            <Components formik={formik} {...props} />
        </Layout>
    );
};

export default Home;
