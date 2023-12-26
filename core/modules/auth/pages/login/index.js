import Layout from '@layout';
import Components from '@modules/auth/pages/login/components';

import { signIn } from 'next-auth/react';

import { useFormik } from 'formik';
import { object, string } from 'yup';

const Home = (props) => {
    const pageConfig = {
        title: 'Log In',
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: object().shape({
            email: string()
                .email('Invalid email address')
                .required('Email is required'),
            password: string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (!result.error) {
                resetForm();
                console.log('logged in', result);
            } else {
                console.log(result.error);
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
