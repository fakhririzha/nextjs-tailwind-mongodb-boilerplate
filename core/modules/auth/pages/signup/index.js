import Layout from '@layout';
import Components from '@modules/auth/pages/signup/components';

// import { handleRegister } from '@modules/auth/services';

import { useRouter } from 'next/router';

import { signIn } from 'next-auth/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

import { gqlRegisterUser } from '@modules/auth/services/graphql';

const Signup = (props) => {
    const pageConfig = {
        title: 'Sign Up',
    };

    const router = useRouter();

    const [registerUser] = gqlRegisterUser();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
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
            const gqlRegisterUser = await registerUser({
                variables: {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                },
            });

            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (!result.error) {
                reset();
                router.replace('/');
            } else {
                console.log(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    };

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

export default Signup;
