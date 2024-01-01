import Layout from '@layout';
import Components from '@modules/auth/pages/login/components';

import { getSession, signIn } from 'next-auth/react';

import { useRouter } from 'next/router';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

const Login = (props) => {
    const pageConfig = {
        title: 'Log In',
    };

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: zodResolver(
            object({
                email: string().email({ message: 'Invalid email address' }),
                password: string().min(1, {
                    message: 'Password is required',
                }),
            }).required()
        ),
    });

    const submitHandler = async (values) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
        });

        if (!result.error) {
            reset();
            router.push('/');
        } else {
            console.log(result.error);
        }
    };

    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.push('/');
            }
        });
    }, [router]);

    const componentProps = {
        register,
        handleSubmit,
        errors,
        submitHandler,
    };

    return (
        <Layout pageConfig={pageConfig}>
            <Components {...componentProps} {...props} />
        </Layout>
    );
};

export default Login;
