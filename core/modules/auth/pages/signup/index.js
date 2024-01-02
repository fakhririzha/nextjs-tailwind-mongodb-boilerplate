import Layout from '@layout';
import Components from '@modules/auth/pages/signup/components';

import { handleRegister } from '@modules/auth/services';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

const Home = (props) => {
    const pageConfig = {
        title: 'Sign Up',
    };

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        resolver: zodResolver(
            object({
                name: string().min(1, { message: 'Name is required' }),
                email: string().email({ message: 'Invalid email address' }),
                password: string({ message: 'Password is required' })
                    .min(8, {
                        message: 'Password must be at least 8 characters',
                    })
                    .max(16, {
                        message: 'Password must be at most 16 characters',
                    }),
            })
        ),
    });

    const submitHandler = async (values) => {
        try {
            await handleRegister(values);

            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (!result.error) {
                reset();
                console.log('registered and logged in', result);
                router.replace('/');
            } else {
                console.log(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    };

    console.log(watch('name'));

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

export default Home;
