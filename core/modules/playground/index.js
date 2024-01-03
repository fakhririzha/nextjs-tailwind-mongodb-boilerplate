import Layout from '@layout';
import Components from '@modules/playground/components';

import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, string } from 'zod';

const Playground = (props) => {
    const pageConfig = {
        title: 'Playground',
    };

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            nama: '',
            email: '',
            password: '',
        },
        resolver: zodResolver(
            object({
                nama: string().min(1, { message: 'Nama is required' }),
                email: string().email({ message: 'Invalid email address' }),
                password: string().min(1, {
                    message: 'Password is required',
                }),
            }).required()
        ),
    });

    const submitHandler = async (values) => {
        console.log(values);
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

export default Playground;
